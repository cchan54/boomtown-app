import { Pool } from "pg";

export default function(app) {
  const pool = new Pool({
    user: app.get("PGUSER"),
    host: app.get("PGHOST"),
    database: app.get("PGDATABASE"),
    password: app.get("PGPASSWORD")
  });

  if (err) {
    throw err;
  }

  console.log("user:", res.rows[0]);
}
