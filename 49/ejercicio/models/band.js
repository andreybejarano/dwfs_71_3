const { DataTypes } = require('sequelize');
const connection = require('../connection');

const model = connection.define(
    'bands',
    {
        name: {
            type: DataTypes.STRING
        },
        members: {
            type: DataTypes.INTEGER
        },
        date_start: {
            type: DataTypes.DATE
        },
        date_end: {
            type: DataTypes.DATE
        },
        country: {
            type: DataTypes.STRING
        }
    },
    {timestamps: false}
);

module.exports = model;