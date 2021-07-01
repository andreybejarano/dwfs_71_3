const { DataTypes } = require('sequelize');

const connection = require('./connection');

const modelo = connection.define(
    'productos',
    {
        nombre: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.INTEGER
        },
        fecha_ingreso: {
            type: DataTypes.DATE
        },
        fecha_salida: {
            type: DataTypes.DATE
        },
        activo: {
            type: DataTypes.BOOLEAN
        }
    },
    { timestamps: false }
);

module.exports = modelo;