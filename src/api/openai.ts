export async function generateSuggestion(prompt: string): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) throw new Error("Missing OpenAI API key");

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Reply with ONE short, meaningful sentence (≤20 words). Keep the user’s intent.",
          },
          { role: "user", content: `Rewrite concisely: ${prompt}` },
        ],
        temperature: 0.3,
        max_tokens: 60,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || `OpenAI error: ${res.status}`);
    }

    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content?.trim();
    if (!content) throw new Error("No suggestion received");

    return content;
  } catch (err) {
    if (err instanceof Error) {
      console.error("OpenAI API Error:", err.message);
      throw err;
    }
    throw new Error("Unknown error");
  }
}
