export const askLLM = async (prompt) => {
	const promptQueryToLLM = `
User query: "${prompt}"

Return response in JSON format:
{
  "movies": ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"]
}

Rules:
- Max 8 movies
- No explanation
- No extra text
`;
	const API_URL = "https://api.groq.com/openai/v1/chat/completions";
	try {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_GROQ_API_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				model: "llama-3.1-8b-instant",
				messages: [
					{
						role: "system",
						content: "You are a movie recommendation assistant",
					},
					{
						role: "user",
						content: promptQueryToLLM,
					},
				],
			}),
		});

		const data = await response.json();
		return data?.choices?.[0]?.message?.content;
	} catch (err) {
		console.error("LLM Error:", err);
		return "Something went wrong. Try again.";
	}
};
