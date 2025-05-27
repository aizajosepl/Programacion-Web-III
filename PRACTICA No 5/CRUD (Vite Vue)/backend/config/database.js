import mysql from "mysql2/promise";
const pool = await mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'bdpc'
});
export default pool;