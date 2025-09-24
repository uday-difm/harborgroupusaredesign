import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 30000, // 30 seconds
});

/**
 * Executes a SQL query using the connection pool.
 * @param {string} sql - The SQL query string.
 * @param {Array} [values] - An array of values to be escaped and inserted into the query.
 * @returns {Promise<any>} The query result.
 */
export async function query(sql, values) {
  try {
    const [rows] = await pool.execute(sql, values);
    return rows;
  } catch (err) {
    console.error('SQL Query Error:', err);
    throw err;
  }
}

async function checkConnection() {
  try {
    const [rows] = await pool.query('SELECT 1');
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
}

// Check the connection when the module is loaded
checkConnection();
export default pool;