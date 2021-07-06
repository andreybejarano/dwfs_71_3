const {DataTypes} = require('sequelize');
const connection = require('../connection');
const bandModel = require('./band');
const albumModel = require('./album');
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
model.belongsTo(bandModel, {as: 'bands', foreignKey: 'band'});
model.belongsTo(albumModel, {as: 'albums', foreignKey: 'album'});
module.exports = model