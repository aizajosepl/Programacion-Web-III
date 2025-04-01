const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Employee = sequelize.define('Employee', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
    },
});
module.exports = Employee;