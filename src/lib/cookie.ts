import { NextRequest, NextResponse } from "next/server";

export const setCookies = (res: NextResponse, cookies: Record<string, string>) => {
  Object.entries(cookies).forEach(([key, value]) => {
    res.cookies.set(key, value);
  });
};

export const getCookies = (param: string) => {
  return (req: NextRequest) => req.cookies.get(param)?.value;
};
