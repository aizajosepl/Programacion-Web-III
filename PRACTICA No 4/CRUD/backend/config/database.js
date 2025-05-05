import {Sequelize} from "sequelize";
const db = new Sequelize('Productos', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'    
});

export default db;