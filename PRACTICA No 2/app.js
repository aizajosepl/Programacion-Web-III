//CONEXION BASE DE DATOS
//1.1. CONEXION BASICA 
const start = new Date();
// app.js
const mysql = require('mysql2');
// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'BD_Estudiante'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
  
  // Example query
  connection.query('SELECT * FROM estudiante', (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  });

  // Close the connection
  connection.end();
});
const end = new Date();
const tiempoa = end.getTime()-start.getTime();
console.log("Tiempo 1: ",tiempoa,"ms");
//--------------------------------------------------------------------------
//1.2. CONEXION UTILIZANDO PROMESAS
const start2 = new Date();
// app.js
const mysql_2 = require('mysql2/promise');
async function main() {
  try {
    // Connect to the database using promises
    const connection = await mysql_2.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'testdb'
    });
    
    console.log('Connected to MySQL Database!');
    
    // Execute a query using promise
    const [rows, fields] = await connection.execute('SELECT * FROM users');
    console.log('Query Result:', rows);
    
    // Close the connection
    await connection.end();
  } catch (err) {
    console.error('Error:', err);
  }
}
main();
const end2 = new Date();
const tiempob = end2.getTime()-start2.getTime();
console.log("Tiempo 2: ",tiempoa-tiempob,"ms");

//--------------------------------------------------------------------------
//1.3. CONEXION UTILIZANDO POOLING
const start3 = new Date();
const mysql_3 = require('mysql2');

// Create a connection pool
const pool = mysql_3.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Query the database using a pooled connection
pool.query('SELECT * FROM users', (err, results, fields) => {
  if (err) throw err;
  console.log(results);
});
const end3 = new Date();
const tiempoc = end3.getTime()-start3.getTime();
console.log("Tiempo 3: ",(tiempoa-tiempob)-tiempoc,"ms");