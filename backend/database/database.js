import sql from "mssql";
import {config} from "dotenv";
config()

// Set up connection config
export const db_config = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),
  encrypt: false
}
// Create the connection pool
const pool = new sql.ConnectionPool(db_config)

export default pool