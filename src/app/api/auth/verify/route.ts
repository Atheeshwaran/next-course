// app/api/auth/verify/route.ts
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");

  if (!token)
    return NextResponse.json({ error: "Missing token" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return NextResponse.json({ decoded });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
