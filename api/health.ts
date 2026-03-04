type ApiRequest = {
  method?: string;
};

type ApiResponse = {
  status: (statusCode: number) => ApiResponse;
  json: (body: unknown) => ApiResponse;
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  return res.status(200).json({
    ok: true,
    hasOpenRouterKey: Boolean(process.env.OPENROUTER_API_KEY),
  });
}
