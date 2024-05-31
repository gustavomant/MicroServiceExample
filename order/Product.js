const Sequelize = require('sequelize');
const database = require('./db');

const Product = database.define('product', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    externalId: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DataTypes.DECIMAL(20, 2),
        allowNull: false
    }
})

module.exports = Product;