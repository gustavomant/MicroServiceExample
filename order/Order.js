const Sequelize = require('sequelize');
const database = require('./db');

const Order = database.define('order', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    customerId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model:'customers',
            key: 'id'
        }
    },
    customerExternalId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: 'customers',
            key: 'externalId'
        }
    },
    productId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    productExternalId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: 'products',
            key: 'externalId'
        }
    }
})

module.exports = Order;