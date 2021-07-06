const {DataTypes} = require('sequelize');

const connection = require('../connection');
const bandModel = require('../models/band');

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

model.belongsTo(bandModel, {as: 'bands', foreignKey: 'band'});
module.exports = model;