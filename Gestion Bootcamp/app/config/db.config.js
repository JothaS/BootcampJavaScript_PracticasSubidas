const Sequelize = require('sequelize')

module.exports = {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'Cjota.241',
    DB: 'db_jwtbootcamp',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  