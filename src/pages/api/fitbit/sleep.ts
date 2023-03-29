import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    fetch(
      "https://api.fitbit.com/1.2/user/-/sleep/date/2023-03-08/2023-03-22.json"
    )
      .then((response) => {
        console.log("fitbit request", response);
        return response.json();
      })
      .then((body) => {
        console.log("body", body);
      });
  }
  console.log(JSON.stringify(session));
  res.status(200).json({ name: "John Doe" });
}
