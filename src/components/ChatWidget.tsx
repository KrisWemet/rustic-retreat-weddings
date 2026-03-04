import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

type Message = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
};

type ChatApiMessage = Pick<Message, "role" | "content">;
type MarkdownInlinePart = { type: "text" | "link"; content: string; href?: string };
type MarkdownBlock =
    | { type: "paragraph"; lines: string[] }
    | { type: "ul"; items: string[] }
    | { type: "ol"; items: string[] };

const toApiMessages = (messages: Message[]): ChatApiMessage[] =>
    messages.map(({ role, content }) => ({ role, content }));

const isAllowedResponseContentType = (response: Response) => {
    const contentType = (response.headers.get("content-type") || "").toLowerCase();
    return contentType.includes("text/event-stream") || contentType.includes("application/json");
};

const STREAM_STALL_TIMEOUT_MS = 25_000;
const CHAT_SESSION_STORAGE_KEY = "rr_chat_session_id";

const generateSessionId = () => {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
        return crypto.randomUUID();
    }

    return `session-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

const getOrCreateChatSessionId = () => {
    if (typeof window === "undefined") {
        return generateSessionId();
    }

    try {
        const existing = window.localStorage.getItem(CHAT_SESSION_STORAGE_KEY);
        if (existing) {
            return existing;
        }

        const created = generateSessionId();
        window.localStorage.setItem(CHAT_SESSION_STORAGE_KEY, created);
        return created;
    } catch {
        return generateSessionId();
    }
};

const isSafeHref = (href: string) => {
    const value = href.trim();
    if (!value) return false;

    if (/^tel:\+?[0-9]+$/i.test(value)) return true;
    if (/^sms:\+?[0-9]+$/i.test(value)) return true;
    if (/^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(value)) return true;
    if (/^https?:\/\/[^\s]+$/i.test(value)) return true;
    if (/^\/[A-Za-z0-9\-._~/?#=&%+]*$/.test(value)) return true;

    return false;
};

const parseInlineMarkdown = (text: string): MarkdownInlinePart[] => {
    const parts: MarkdownInlinePart[] = [];
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(text)) !== null) {
        const [fullMatch, label, href] = match;
        if (match.index > lastIndex) {
            parts.push({ type: "text", content: text.slice(lastIndex, match.index) });
        }

        if (isSafeHref(href)) {
            parts.push({ type: "link", content: label, href: href.trim() });
        } else {
            parts.push({ type: "text", content: fullMatch });
        }

        lastIndex = match.index + fullMatch.length;
    }

    if (lastIndex < text.length) {
        parts.push({ type: "text", content: text.slice(lastIndex) });
    }

    return parts.length > 0 ? parts : [{ type: "text", content: text }];
};

const parseSafeMarkdownBlocks = (content: string): MarkdownBlock[] => {
    const lines = content.replace(/\r\n/g, "\n").split("\n");
    const blocks: MarkdownBlock[] = [];
    let paragraphBuffer: string[] = [];
    let listBuffer: string[] = [];
    let listType: "ul" | "ol" | null = null;

    const flushParagraph = () => {
        if (paragraphBuffer.length > 0) {
            blocks.push({ type: "paragraph", lines: paragraphBuffer });
            paragraphBuffer = [];
        }
    };

    const flushList = () => {
        if (listType && listBuffer.length > 0) {
            blocks.push({ type: listType, items: listBuffer });
            listType = null;
            listBuffer = [];
        }
    };

    lines.forEach((line) => {
        const trimmed = line.trim();
        const unordered = trimmed.match(/^[-*]\s+(.*)$/);
        const ordered = trimmed.match(/^\d+\.\s+(.*)$/);

        if (!trimmed) {
            flushParagraph();
            flushList();
            return;
        }

        if (unordered) {
            flushParagraph();
            if (listType !== "ul") {
                flushList();
                listType = "ul";
            }
            listBuffer.push(unordered[1]);
            return;
        }

        if (ordered) {
            flushParagraph();
            if (listType !== "ol") {
                flushList();
                listType = "ol";
            }
            listBuffer.push(ordered[1]);
            return;
        }

        flushList();
        paragraphBuffer.push(trimmed);
    });

    flushParagraph();
    flushList();
    return blocks;
};

const renderInlineParts = (parts: MarkdownInlinePart[]) =>
    parts.map((part, index) => {
        if (part.type === "link" && part.href) {
            const isExternal = /^https?:\/\//i.test(part.href);
            return (
                <a
                    key={`link-${index}-${part.href}`}
                    href={part.href}
                    className="underline underline-offset-2 text-secondary hover:text-secondary/80"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                >
                    {part.content}
                </a>
            );
        }

        return <React.Fragment key={`text-${index}`}>{part.content}</React.Fragment>;
    });

const renderSafeMarkdown = (content: string) =>
    parseSafeMarkdownBlocks(content).map((block, blockIndex) => {
        if (block.type === "paragraph") {
            return (
                <p key={`p-${blockIndex}`} className="leading-relaxed">
                    {renderInlineParts(parseInlineMarkdown(block.lines.join(" ")))}
                </p>
            );
        }

        if (block.type === "ul") {
            return (
                <ul key={`ul-${blockIndex}`} className="list-disc pl-5 space-y-1">
                    {block.items.map((item, itemIndex) => (
                        <li key={`uli-${itemIndex}`}>{renderInlineParts(parseInlineMarkdown(item))}</li>
                    ))}
                </ul>
            );
        }

        return (
            <ol key={`ol-${blockIndex}`} className="list-decimal pl-5 space-y-1">
                {block.items.map((item, itemIndex) => (
                    <li key={`oli-${itemIndex}`}>{renderInlineParts(parseInlineMarkdown(item))}</li>
                ))}
            </ol>
        );
    });

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'initial-greeting',
            role: 'assistant',
            content: "Hi there! Welcome to Rustic Retreat. I'm here to answer your questions about our venue, packages, and anything else you need. How can I help?"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isStalled, setIsStalled] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const abortControllerRef = useRef<AbortController | null>(null);
    const stallTimerRef = useRef<number | null>(null);
    const activeRequestRef = useRef<Promise<void> | null>(null);
    const cancelReasonRef = useRef<"cancel" | "retry" | null>(null);
    const lastRequestMessagesRef = useRef<Message[] | null>(null);
    const sessionIdRef = useRef<string>(getOrCreateChatSessionId());
    const [hasShownAiDisclosure, setHasShownAiDisclosure] = useState(false);

    const clearStallTimer = () => {
        if (stallTimerRef.current !== null) {
            window.clearTimeout(stallTimerRef.current);
            stallTimerRef.current = null;
        }
    };

    const armStallTimer = () => {
        clearStallTimer();
        setIsStalled(false);
        stallTimerRef.current = window.setTimeout(() => {
            setIsStalled(true);
        }, STREAM_STALL_TIMEOUT_MS);
    };

    const runRequest = async (requestMessages: Message[]) => {
        setIsLoading(true);
        setIsStalled(false);
        lastRequestMessagesRef.current = requestMessages;

        const apiMessages = toApiMessages(requestMessages);
        const controller = new AbortController();
        abortControllerRef.current = controller;
        cancelReasonRef.current = null;
        armStallTimer();

        let assistantMessageId: string | null = null;

        try {
            const requestInit: RequestInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Session-Id': sessionIdRef.current,
                },
                body: JSON.stringify({ messages: apiMessages }),
                signal: controller.signal,
            };
            const response = await fetch('/api/chat', requestInit);
            const contentType = (response.headers.get('content-type') || '').toLowerCase();
            armStallTimer();

            if (!response.ok) {
                const errorBody = await response.text();
                console.error('Chat API error response:', errorBody);
                throw new Error('Unable to get a response right now.');
            }

            if (!isAllowedResponseContentType(response)) {
                const unexpectedBody = await response.text();
                console.error('Unexpected chat response content-type:', contentType, unexpectedBody);
                throw new Error('Unexpected server response format.');
            }

            if (contentType.includes('application/json')) {
                const data = await response.json() as { content?: string; message?: string; error?: string };

                if (typeof data.error === 'string' && data.error.trim()) {
                    console.error('Chat API JSON error payload:', data.error);
                    throw new Error('Unable to get a response right now.');
                }

                const assistantContent = typeof data.content === 'string'
                    ? data.content
                    : typeof data.message === 'string'
                        ? data.message
                        : '';

                if (!assistantContent.trim()) {
                    console.error('Chat API JSON payload missing content:', data);
                    throw new Error('Unexpected server response format.');
                }

                setMessages((prev) => [
                    ...prev,
                    { id: (Date.now() + 1).toString(), role: 'assistant', content: assistantContent }
                ]);
                return;
            }

            if (!response.body) throw new Error("No response body");

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let assistantContent = '';
            assistantMessageId = (Date.now() + 1).toString();

            setMessages((prev) => [
                ...prev,
                { id: assistantMessageId as string, role: 'assistant', content: '' }
            ]);

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                armStallTimer();
                const chunk = decoder.decode(value, { stream: true });
                assistantContent += chunk;

                setMessages((prev) =>
                    prev.map((msg) =>
                        msg.id === assistantMessageId
                            ? { ...msg, content: assistantContent }
                            : msg
                    )
                );
            }
        } catch (error) {
            const isAbort = error instanceof DOMException && error.name === "AbortError";
            const fallback = "Sorry, I’m having trouble connecting right now. Please try again in a moment, or contact us at rusticretreatalberta@gmail.com or (780) 210-6252.";

            if (isAbort) {
                if (cancelReasonRef.current === "cancel") {
                    setMessages((prev) => [
                        ...prev,
                        { id: Date.now().toString(), role: 'assistant', content: "Request canceled. You can retry whenever you're ready." }
                    ]);
                }
                return;
            }

            console.error('Chat error:', error);
            if (assistantMessageId) {
                setMessages((prev) =>
                    prev.map((msg) =>
                        msg.id === assistantMessageId
                            ? { ...msg, content: fallback }
                            : msg
                    )
                );
            } else {
                setMessages((prev) => [
                    ...prev,
                    { id: Date.now().toString(), role: 'assistant', content: fallback }
                ]);
            }
        } finally {
            clearStallTimer();
            setIsStalled(false);
            setIsLoading(false);
            abortControllerRef.current = null;
            cancelReasonRef.current = null;
        }
    };

    const startRequest = (requestMessages: Message[]) => {
        const requestPromise = runRequest(requestMessages);
        activeRequestRef.current = requestPromise;
        return requestPromise.finally(() => {
            if (activeRequestRef.current === requestPromise) {
                activeRequestRef.current = null;
            }
        });
    };

    // Scroll to bottom
    useEffect(() => {
        if (messagesEndRef.current && isOpen) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isOpen]);

    useEffect(() => {
        return () => {
            clearStallTimer();
            abortControllerRef.current?.abort();
        };
    }, []);

    useEffect(() => {
        if (!isOpen || hasShownAiDisclosure) {
            return;
        }

        setMessages((prev) => [
            ...prev,
            {
                id: `ai-disclosure-${Date.now()}`,
                role: "assistant",
                content: "I’m Rustic Retreat Chatbot (AI), not a live agent. For urgent or important questions, please call (780) 210-6252 or email rusticretreatalberta@gmail.com.",
            },
        ]);
        setHasShownAiDisclosure(true);
    }, [isOpen, hasShownAiDisclosure]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input.trim() };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        const newMessages = [...messages, userMessage];
        void startRequest(newMessages);
    };

    const handleCancel = () => {
        if (!isLoading || !abortControllerRef.current) return;
        cancelReasonRef.current = "cancel";
        abortControllerRef.current.abort();
    };

    const handleRetry = async () => {
        const snapshot = lastRequestMessagesRef.current;
        if (!snapshot) return;

        if (isLoading && abortControllerRef.current) {
            cancelReasonRef.current = "retry";
            abortControllerRef.current.abort();
        }

        if (activeRequestRef.current) {
            try {
                await activeRequestRef.current;
            } catch {
                // Ignore - failure UI is handled inside runRequest.
            }
        }

        void startRequest(snapshot);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {isOpen && (
                <div className="mb-4 bg-background w-[320px] sm:w-[380px] h-[450px] max-h-[75vh] rounded-2xl shadow-2xl border border-primary/10 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in-20 duration-300">
                    {/* Header */}
                    <div className="bg-primary/5 border-b border-primary/10 text-foreground px-4 py-3 bg-stone-50">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="bg-secondary/20 p-1.5 rounded-full text-secondary">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-primary">Rustic Retreat Chatbot (AI)</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                                aria-label="Close chat"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-2">
                            Not a live agent. For urgent/important questions contact us.
                        </p>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/50">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-[15px] shadow-sm ${message.role === 'user'
                                            ? 'bg-secondary text-secondary-foreground rounded-br-sm'
                                            : 'bg-white border border-primary/10 text-foreground rounded-bl-sm'
                                        }`}
                                >
                                    <div className="space-y-2">
                                        {renderSafeMarkdown(message.content)}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-primary/10 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin text-secondary" />
                                    <span className="text-xs text-muted-foreground">Typing...</span>
                                </div>
                            </div>
                        )}
                        {isLoading && isStalled && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-primary/10 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                                    <p className="text-xs text-muted-foreground mb-2">Still working...</p>
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={handleCancel}
                                            className="text-xs px-2.5 py-1.5 rounded-md border border-primary/20 hover:bg-primary/5 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleRetry}
                                            className="text-xs px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
                                        >
                                            Retry
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} className="h-1" />
                    </div>

                    {/* Input Area */}
                    <div className="px-3 pt-2 pb-1 bg-white border-t border-primary/10">
                        <div className="flex gap-2">
                            <a
                                href="tel:+17802106252"
                                className="text-[11px] px-2.5 py-1 rounded-md border border-primary/20 hover:bg-primary/5 transition-colors"
                            >
                                Call
                            </a>
                            <a
                                href="sms:+17802106252"
                                className="text-[11px] px-2.5 py-1 rounded-md border border-primary/20 hover:bg-primary/5 transition-colors"
                            >
                                Text
                            </a>
                            <a
                                href="mailto:rusticretreatalberta@gmail.com"
                                className="text-[11px] px-2.5 py-1 rounded-md border border-primary/20 hover:bg-primary/5 transition-colors"
                            >
                                Email
                            </a>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="p-3 bg-white flex items-center gap-2"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a question..."
                            className="flex-1 px-4 py-2.5 bg-primary/5 hover:bg-primary/10 transition-colors border-none focus:outline-none focus:ring-1 focus:ring-secondary/50 rounded-full text-sm placeholder:text-muted-foreground"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="rounded-full w-10 h-10 flex-shrink-0 bg-secondary hover:bg-secondary/90 text-secondary-foreground flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                            aria-label="Send message"
                        >
                            <Send className="w-4 h-4 ml-1" />
                        </button>
                    </form>
                </div>
            )}

            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="rounded-full w-14 h-14 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all bg-secondary hover:bg-secondary/90 text-secondary-foreground flex items-center justify-center relative group"
                    aria-label="Open chat"
                >
                    <MessageCircle className="w-7 h-7" />
                    <span className="absolute right-full mr-4 bg-white border text-foreground text-sm font-medium px-4 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none after:content-[''] after:absolute after:top-1/2 after:-right-2 after:-translate-y-1/2 after:border-8 after:border-transparent after:border-l-white">
                        Have a question?
                    </span>
                </button>
            )}
        </div>
    );
}
