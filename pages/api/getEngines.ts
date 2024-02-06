import { NextApiRequest, NextApiResponse } from "next";
import openai from "@/lib/chatgpt";
import axios from "axios";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const models = await axios
    .get("https://api.openai.com/v1/models", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    })
    .then((response) => response.data.data);

  const modelOptions = models.map((model: Option ) => ({
    value: model.id,
    label: model.id,
  }));

  res.status(200).json({
    modelOptions,
  });

  // console.log(modelOptions);
  
}
