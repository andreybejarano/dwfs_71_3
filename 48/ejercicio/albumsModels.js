const {DataTypes} = require('sequelize');

const connection = require('./connection');

const model = connection.define(
    'albums',
    {
        album_name: {
            type: DataTypes.STRING
        },
        band:{
            type: DataTypes.INTEGER
        },
        publication_date: {
            type: DataTypes.DATE
        }
    },
    {timestamps: false}  
);

module.exports = model;