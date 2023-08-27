
const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Modelos
db.User = require('./user.model')(sequelize, Sequelize);
db.Bootcamp = require('./bootcamp.model')(sequelize, Sequelize);

// Relaciones
db.User.belongsToMany(db.Bootcamp, { through: 'UserBootcamp' });
db.Bootcamp.belongsToMany(db.User, { through: 'UserBootcamp' });

module.exports = db;
