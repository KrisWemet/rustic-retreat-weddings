import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

type Message = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
};

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
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom
    useEffect(() => {
        if (messagesEndRef.current && isOpen) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input.trim() };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const newMessages = [...messages, userMessage];

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!response.ok) {
                throw new Error('Chat API returned an error');
            }

            if (!response.body) throw new Error("No response body");

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let assistantContent = '';

            const assistantMessageId = (Date.now() + 1).toString();

            setMessages((prev) => [
                ...prev,
                { id: assistantMessageId, role: 'assistant', content: '' }
            ]);

            // Read the raw text stream
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

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
            console.error('Chat error:', error);
            setMessages((prev) => [
                ...prev,
                { id: Date.now().toString(), role: 'assistant', content: "Oops, I'm having trouble connecting right now. Please reach out to rusticretreatalberta@gmail.com or (780) 210-6252 instead!" }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {isOpen && (
                <div className="mb-4 bg-background w-[320px] sm:w-[380px] h-[450px] max-h-[75vh] rounded-2xl shadow-2xl border border-primary/10 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in-20 duration-300">
                    {/* Header */}
                    <div className="bg-primary/5 border-b border-primary/10 text-foreground px-4 py-3 flex justify-between items-center bg-stone-50">
                        <div className="flex items-center gap-2">
                            <div className="bg-secondary/20 p-1.5 rounded-full text-secondary">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-primary">Venue Chat</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-muted-foreground hover:text-foreground transition-colors p-1"
                            aria-label="Close chat"
                        >
                            <X className="w-5 h-5" />
                        </button>
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
                                    <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
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
                        <div ref={messagesEndRef} className="h-1" />
                    </div>

                    {/* Input Area */}
                    <form
                        onSubmit={handleSubmit}
                        className="p-3 bg-white border-t border-primary/10 flex items-center gap-2"
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
