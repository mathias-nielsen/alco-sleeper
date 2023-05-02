import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  created_at: string;
};

const secret = process.env.SUPABASE_SERVICE_SECRET_API_KEY;

const url =
  "https://evqduhqwwkboglwgioew.supabase.co/rest/v1/alcohol_entries_v1";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const get = await getAll();
      res.status(200).json({ entries: get.data });
      break;
    case "POST":
      const post = await createNew();
      res.status(200).json({ result: post.data });
      break;
  }
}

const getAll = async () => {
  return await axios.get<Data[]>(url + "?select=*", {
    headers: {
      apikey: secret!,
      Authorization: "Bearer " + secret,
    },
  });
};

const createNew = async () => {
  return await axios.post(
    url,
    {}, // Empty body
    {
      headers: {
        apikey: secret!,
        Authorization: "Bearer " + secret,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
    }
  );
};
