const conexion = require('./../config/db.config.js');


const db = {
  conexion: conexion,
  user: require('./user.model.js'),
  bootcamp: require('./bootcamp.model.js')
}


db.user.belongsToMany(db.bootcamp, {
  through: 'user_bootcamp',
  as: 'bootcamps',
  foreignKey: 'user_id'
});

db.bootcamp.belongsToMany(db.user, {
  through: 'user_bootcamp',
  as: 'users',
  foreignKey: 'bootcamp_id'
});


module.exports = db;
