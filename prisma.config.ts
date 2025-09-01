import "dotenv/config";
import path from "node:path";

import type { PrismaConfig } from "prisma";

const prismaConfig: PrismaConfig = {
  schema: path.join(__dirname, "./prisma"),
  migrations: {
    path: path.join("db", "migrations"),
  },
  views: {
    path: path.join("db", "views"),
  },
  typedSql: {
    path: path.join("db", "queries"),
  },
} satisfies PrismaConfig;

export default prismaConfig;
