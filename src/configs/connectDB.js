import mysql from "mysql2/promise";

// Create the connection pool. The pool-specific settings are the defaults

console.log("Creating connection pool...")
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'NodeJsBasic',
    // password: '1234'
});


export default pool;