const Sequelize = require('sequelize');
const database = require('./db');

const Customer = database.define('customer', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    externalId: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
})

module.exports = Customer;