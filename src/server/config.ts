import { Pool } from "pg";

const env = "development";

const config: Record<string, string> = {
  development:
    process.env.DATABASE_URL ||
    "postgresql://postgres:postgres@localhost:5432/coursedb",
  production:
    process.env.DATABASE_URL ||
    "postgresql://prod_user:prod_pass@prod-host:5432/mydatabase",
  test:
    process.env.TEST_DATABASE_URL ||
    "postgresql://postgres:postgres@localhost:5432/testdb",
};

const pool = new Pool({
  connectionString: config[env],
  ssl: {
    rejectUnauthorized: false,
  },
});

(async () => {
  try {
    await pool.connect();
    console.log(`Connected to database: ${config[env]}`);
  } catch (error) {
    console.error("Database connection error:", error);
  }
})();

export default pool;
