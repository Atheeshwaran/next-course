import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

 const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const sessionData = req.body;
  const cookie = serialize("session", JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });
  res.setHeader("Set-Cookie", cookie);
  res.status(200).json({ message: "Session created" });
 };
export default handler; 
