import fs from "fs/promises";
import path from "path";

export type ChatLogRecord = {
  session_id: string;
  user_message: string;
  assistant_message: string;
  cited_sources: string[];
  needs_human: boolean;
  timestamp: string;
  requested_model: string | null;
  used_model: string | null;
  provider: string | null;
};

type QuestionCount = {
  normalized: string;
  question: string;
  count: number;
};

type ClusterCount = {
  cluster: string;
  count: number;
  sample_questions: string[];
};

type NeedsHumanCount = {
  normalized: string;
  question: string;
  count: number;
};

type ChatStats = {
  top_questions: QuestionCount[];
  top_clusters: ClusterCount[];
  top_needs_human_questions: NeedsHumanCount[];
  cluster_method: "embeddings" | "keyword";
  total_logged_messages: number;
};

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SUPABASE_CHATLOG_TABLE = process.env.SUPABASE_CHATLOG_TABLE || "chat_logs";
const JSONL_LOG_FILE = process.env.CHATLOG_FILE_PATH || "/tmp/rustic-retreat-chatlogs.jsonl";
const EMBEDDING_MODEL = process.env.CHAT_EMBEDDING_MODEL || "text-embedding-3-small";
const ENABLE_EMBEDDINGS = (process.env.ENABLE_EMBEDDINGS || "").toLowerCase() === "true";

const hasSupabaseConfig = Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);

const ensureArrayOfStrings = (value: unknown) => {
  if (!Array.isArray(value)) {
    return [] as string[];
  }
  return value.filter((item): item is string => typeof item === "string");
};

const normalizeQuestion = (question: string) => {
  return question
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const extractQuestionCounts = (questions: string[], limit: number) => {
  const map = new Map<string, { count: number; sample: string }>();

  questions.forEach((question) => {
    const normalized = normalizeQuestion(question);
    if (!normalized) return;

    const current = map.get(normalized);
    if (current) {
      current.count += 1;
      return;
    }

    map.set(normalized, { count: 1, sample: question.trim() || normalized });
  });

  return [...map.entries()]
    .map(([normalized, info]) => ({
      normalized,
      question: info.sample,
      count: info.count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
};

const getKeywordCluster = (normalizedQuestion: string) => {
  const keywordClusters: Array<{ cluster: string; keywords: string[] }> = [
    { cluster: "Pricing & Deposits", keywords: ["price", "cost", "package", "deposit", "fee", "budget"] },
    { cluster: "Availability & Booking", keywords: ["book", "booking", "date", "available", "season", "inquiry"] },
    { cluster: "Capacity & Camping", keywords: ["guest", "capacity", "camp", "rv", "accommodate"] },
    { cluster: "Amenities & Facilities", keywords: ["amenities", "water", "power", "electric", "bathroom", "shower", "wifi", "outhouse"] },
    { cluster: "Rules & Policies", keywords: ["rule", "policy", "cleanup", "noise", "pet", "dog", "decor", "drone", "alcohol"] },
    { cluster: "Location & Logistics", keywords: ["location", "distance", "drive", "edmonton", "parking", "hotel"] },
    { cluster: "Accessibility", keywords: ["access", "accessible", "mobility", "wheelchair"] },
    { cluster: "Weather", keywords: ["weather", "rain", "wind", "storm", "forecast"] },
  ];

  for (const group of keywordClusters) {
    if (group.keywords.some((keyword) => normalizedQuestion.includes(keyword))) {
      return group.cluster;
    }
  }

  return "Other";
};

const computeKeywordClusters = (questions: string[], limit: number) => {
  const map = new Map<string, { count: number; samples: string[] }>();

  questions.forEach((question) => {
    const normalized = normalizeQuestion(question);
    if (!normalized) return;

    const cluster = getKeywordCluster(normalized);
    const current = map.get(cluster) || { count: 0, samples: [] };
    current.count += 1;
    if (current.samples.length < 3) {
      current.samples.push(question);
    }
    map.set(cluster, current);
  });

  return [...map.entries()]
    .map(([cluster, info]) => ({
      cluster,
      count: info.count,
      sample_questions: info.samples,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
};

const dot = (a: number[], b: number[]) => {
  let total = 0;
  for (let i = 0; i < a.length; i += 1) {
    total += a[i] * b[i];
  }
  return total;
};

const magnitude = (vector: number[]) => Math.sqrt(dot(vector, vector));

const cosineSimilarity = (a: number[], b: number[]) => {
  const denom = magnitude(a) * magnitude(b);
  if (!denom) return 0;
  return dot(a, b) / denom;
};

const blendCentroid = (current: number[], incoming: number[], currentCount: number, incomingCount: number) => {
  const total = currentCount + incomingCount;
  return current.map((value, index) => ((value * currentCount) + (incoming[index] * incomingCount)) / total);
};

const tryEmbeddingClusters = async (questionsByCount: QuestionCount[], limit: number) => {
  if (!ENABLE_EMBEDDINGS) {
    return null as ClusterCount[] | null;
  }

  if (!hasSupabaseConfig || !process.env.OPENAI_API_KEY) {
    return null as ClusterCount[] | null;
  }

  if (questionsByCount.length === 0) {
    return [] as ClusterCount[];
  }

  try {
    const response = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: EMBEDDING_MODEL,
        input: questionsByCount.map((entry) => entry.normalized),
      }),
    });

    if (!response.ok) {
      console.warn("Embedding clustering fallback: OpenAI embeddings request failed", await response.text());
      return null;
    }

    const payload = await response.json() as { data?: Array<{ embedding?: number[] }> };
    if (!payload.data || payload.data.length !== questionsByCount.length) {
      return null;
    }

    const clusters: Array<{
      centroid: number[];
      count: number;
      label: string;
      samples: string[];
    }> = [];

    questionsByCount.forEach((entry, index) => {
      const embedding = payload.data?.[index]?.embedding;
      if (!embedding || embedding.length === 0) return;

      let bestIndex = -1;
      let bestScore = -1;

      clusters.forEach((cluster, clusterIndex) => {
        const score = cosineSimilarity(embedding, cluster.centroid);
        if (score > bestScore) {
          bestScore = score;
          bestIndex = clusterIndex;
        }
      });

      if (bestIndex !== -1 && bestScore >= 0.82) {
        const cluster = clusters[bestIndex];
        cluster.centroid = blendCentroid(cluster.centroid, embedding, cluster.count, entry.count);
        cluster.count += entry.count;
        if (cluster.samples.length < 3) {
          cluster.samples.push(entry.question);
        }
      } else {
        clusters.push({
          centroid: embedding,
          count: entry.count,
          label: entry.question,
          samples: [entry.question],
        });
      }
    });

    return clusters
      .map((cluster) => ({
        cluster: cluster.label,
        count: cluster.count,
        sample_questions: cluster.samples,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  } catch (error) {
    console.warn("Embedding clustering failed; falling back to keyword clustering.", error);
    return null;
  }
};

const parseJsonlLogs = async () => {
  try {
    const file = await fs.readFile(JSONL_LOG_FILE, "utf8");
    const lines = file.split("\n").map((line) => line.trim()).filter(Boolean);
    const parsed: ChatLogRecord[] = [];

    lines.forEach((line) => {
      try {
        const entry = JSON.parse(line) as Partial<ChatLogRecord>;
        if (!entry.user_message || !entry.assistant_message || !entry.session_id || !entry.timestamp) {
          return;
        }
        parsed.push({
          session_id: String(entry.session_id),
          user_message: String(entry.user_message),
          assistant_message: String(entry.assistant_message),
          cited_sources: ensureArrayOfStrings(entry.cited_sources),
          needs_human: Boolean(entry.needs_human),
          timestamp: String(entry.timestamp),
          requested_model: entry.requested_model ? String(entry.requested_model) : null,
          used_model: entry.used_model ? String(entry.used_model) : null,
          provider: entry.provider ? String(entry.provider) : null,
        });
      } catch {
        // Ignore malformed lines.
      }
    });

    return parsed.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  } catch {
    return [] as ChatLogRecord[];
  }
};

const readSupabaseLogs = async (limit: number) => {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return [] as ChatLogRecord[];
  }

  const query = new URL(`${SUPABASE_URL}/rest/v1/${SUPABASE_CHATLOG_TABLE}`);
  query.searchParams.set("select", "session_id,user_message,assistant_message,cited_sources,needs_human,timestamp,requested_model,used_model,provider");
  query.searchParams.set("order", "timestamp.desc");
  query.searchParams.set("limit", String(limit));

  const response = await fetch(query.toString(), {
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Supabase read failed: ${response.status} ${await response.text()}`);
  }

  const data = (await response.json()) as Array<Partial<ChatLogRecord>>;
  return data.map((entry) => ({
    session_id: String(entry.session_id || ""),
    user_message: String(entry.user_message || ""),
    assistant_message: String(entry.assistant_message || ""),
    cited_sources: ensureArrayOfStrings(entry.cited_sources),
    needs_human: Boolean(entry.needs_human),
    timestamp: String(entry.timestamp || ""),
    requested_model: entry.requested_model ? String(entry.requested_model) : null,
    used_model: entry.used_model ? String(entry.used_model) : null,
    provider: entry.provider ? String(entry.provider) : null,
  })).filter((entry) => entry.user_message && entry.assistant_message && entry.session_id && entry.timestamp);
};

const appendJsonlLog = async (record: ChatLogRecord) => {
  const targetDir = path.dirname(JSONL_LOG_FILE);
  await fs.mkdir(targetDir, { recursive: true });
  await fs.appendFile(JSONL_LOG_FILE, `${JSON.stringify(record)}\n`, "utf8");
};

const writeSupabaseLog = async (record: ChatLogRecord) => {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase env not configured.");
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_CHATLOG_TABLE}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    throw new Error(`Supabase insert failed: ${response.status} ${await response.text()}`);
  }
};

export const extractCitedSources = (assistantMessage: string) => {
  const sourceLines = assistantMessage
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^source\s*:/i.test(line));

  const collected = sourceLines.flatMap((line) => {
    const sourcePart = line.replace(/^source\s*:/i, "").trim();
    return sourcePart
      .split(/[,\s]+/)
      .map((item) => item.trim())
      .filter((item) => item.startsWith("/"));
  });

  return [...new Set(collected)];
};

export const needsHumanFromAssistant = (assistantMessage: string) => {
  return /i['’]m not sure|contact|call|email|unable to|can’t confirm/i.test(assistantMessage);
};

export const persistChatLog = async (record: ChatLogRecord) => {
  if (hasSupabaseConfig) {
    try {
      await writeSupabaseLog(record);
      return;
    } catch (error) {
      console.warn("Supabase chat log write failed; using JSONL fallback.", error);
    }
  }

  try {
    await appendJsonlLog(record);
  } catch (error) {
    console.error("Failed to append chat log JSONL fallback.", error);
  }
};

export const readChatLogs = async (limit = 5000) => {
  if (hasSupabaseConfig) {
    try {
      return await readSupabaseLogs(limit);
    } catch (error) {
      console.warn("Supabase chat log read failed; using JSONL fallback.", error);
    }
  }

  const fileLogs = await parseJsonlLogs();
  return fileLogs.slice(0, limit);
};

export const computeChatStats = async (): Promise<ChatStats> => {
  const logs = await readChatLogs();
  const questions = logs.map((entry) => entry.user_message).filter(Boolean);
  const needsHumanQuestions = logs.filter((entry) => entry.needs_human).map((entry) => entry.user_message).filter(Boolean);

  const topQuestions = extractQuestionCounts(questions, 20);
  const topNeedsHumanQuestions = extractQuestionCounts(needsHumanQuestions, 20);

  const embeddingClusters = await tryEmbeddingClusters(topQuestions, 10);
  const topClusters = embeddingClusters || computeKeywordClusters(questions, 10);

  return {
    top_questions: topQuestions,
    top_clusters: topClusters,
    top_needs_human_questions: topNeedsHumanQuestions,
    cluster_method: embeddingClusters ? "embeddings" : "keyword",
    total_logged_messages: logs.length,
  };
};
