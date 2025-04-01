const Sequelize = require('sequelize');

const sequelize = new Sequelize('employee_management', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: true,
  },
});

module.exports = sequelize;