import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  reactStrictMode: true,
  distDir: "dist",
};

export default nextConfig;
