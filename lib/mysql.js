import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const pool = mysql.createPool({
  host: process.env.HOST,  // Use environment variable for host
  user: process.env.USER,  // Use environment variable for user
  password: process.env.PASSWORD,  // Use environment variable for password
  database: process.env.DATABASE,  // Use environment variable for database
});

async function checkConnection() {
  try {
    // Test the connection by performing a simple query
    const [rows] = await pool.query('SELECT 1'); // Simple query to check connection
    console.log('Database connected successfully!');
    console.log('Test query result:', rows);
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
}

// Check the connection
checkConnection();

export default pool;
