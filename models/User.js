const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db_config')

class User extends Model { }

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize, // DB connection instance
    modelName: 'user' // used for creating tables
});

module.exports = User;

// 40 min