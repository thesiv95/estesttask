const { Sequelize } = require('sequelize');


const dbName = process.env.DB_NAME || 'users';
const dbLogin = process.env.DB_LOGIN || 'root';
const dbPassword = process.env.DB_PASSWORD || '';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = +process.env.DB_PORT || 3306;

module.exports = new Sequelize(dbName, dbLogin, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
    port: dbPort,
});