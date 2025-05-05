import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const User = db.define('lista',{ 
    nombre: DataTypes.STRING,
    codigo: DataTypes. INTEGER,
    tipo: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    fechadeelaboracion: DataTypes.DATE,
    fechadevencimiento: DataTypes.DATE
},{
    freezeTableName: true,
});

export default User;
(async()=>{
    await db.sync();
})();