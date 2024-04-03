import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await JSON.parse(req.body);
  const text = `Message: ${data.message}\nName: ${data.name}\nPhone: ${data.phone}`;
  const response = await fetch(
    "https://api.telegram.org/bot6904871526:AAEDV9UKkWprJOX8JspNuq37SC66Z9tcwAk/sendMessage",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat_id: "70964655", text }),
    }
  );

  res.status(response.status).json({ status: response.status !== 200 ? "error" : "ok" });
}
