const Sequelize = require('sequelize')

const conexion = require('./../config/db.config.js')


const Bootcamp = conexion.define("Bootcamp", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cue: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 5,
            max: 10,
        },
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Bootcamp

