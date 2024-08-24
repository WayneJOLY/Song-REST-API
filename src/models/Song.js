const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Song = sequelize.define('song', {
    // Definimos las columnas aquí
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    album: {
        type: DataTypes.STRING
        // allowNull por defecto esta en true
    },
    artist: {
        type: DataTypes.STRING,
        allowNull: false
        
    },
    year:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    genre: {
        type: DataTypes.STRING
        // allowNull por defecto esta en true
    },
    duration: {
        type: DataTypes.STRING
        // allowNull por defecto esta en true
    },
    lyrics: {
        type: DataTypes.TEXT
        // allowNull por defecto esta en true
    },
});

module.exports = Song;