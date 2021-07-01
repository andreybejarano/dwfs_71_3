const {DataTypes} = require('sequelize');
const connection = require('./connection');
const model = connection.define(
    'songs',
    {
        name: {
            type: DataTypes.STRING
        },
        duration: {
            type: DataTypes.INTEGER
        },
        album: {
            type: DataTypes.INTEGER
        },
        band: {
            type: DataTypes.INTEGER
        },
        date_publication: {
            type: DataTypes.DATE
        }
    },
    {timestamps: false}
);

module.exports = model