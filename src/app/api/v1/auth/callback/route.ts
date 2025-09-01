import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { setCookies } from "lib/cookie";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return new Response("Missing token", { status: 400 });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as {
      email: string;
      name: string;
      password: string;
    };

    if (!payload) {
      return new Response("Invalid token", { status: 401 });
    }

    await prisma.user.upsert({
      where: { email: payload.email },
      update: {
        lastLogin: new Date(),
        token: token,
      },
      create: {
        email: payload.email,
        name: payload.name ?? "",
        password: payload.password,
        token: token,
      },
    });

    const response = NextResponse.redirect(new URL("/", req.url));
    setCookies(response, {
      token: token,
      httpOnly: "true",
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
