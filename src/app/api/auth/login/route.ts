// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { db } from "server/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await db(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );

    console.log(user, "user");

    if (!user || user.length === 0) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error :" + error },
      { status: 500 }
    );
  }
}
