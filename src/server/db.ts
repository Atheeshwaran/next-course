import pool from "./config";

export async function db(text: string, params?: string[]) {
  try {
    await pool.connect();
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Database connection error");
  }

  const result = await pool.query(text, params);
  return result.rows;
}
