import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const response = await openai.completions
    .create({
      model,
      prompt,
      max_tokens: 30,
      temperature: 0.9,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was unable to find an answer for that (Error: ${err.message})`
    );

  return response;
};

export default query;
