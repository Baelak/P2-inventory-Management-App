const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost', // Change to Render database host - REFER MODULE 11
    dialect: 'postgres',
    port: 5432, // Default PostgreSQL port
  }
);

module.exports = sequelize;
