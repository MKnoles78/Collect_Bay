'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.user = require('.model/user.js')(sequelize,Sequelize);
// db.card = require('.model/card.js')(sequelize,Sequelize);
// db.comic = require('.model/comic.js')(sequelize,Sequelize);
// db.record = require('.model/record.js')(sequelize,Sequelize);
// db.stamp = require('.model/stamp.js')(sequelize,Sequelize);
// db.toy = require('.model/toy.js')(sequelize,Sequelize);
// db.wine = require('.model/wine.js')(sequelize,Sequelize);


// db.card.belongsTo(db.user);
// db.comic.belongsTo(db.user);
// db.record.belongsTo(db.user);
// db.stamp.belongsTo(db.user);
// db.toy.belongsTo(db.user);
// db.wine.belongsTo(db.user);

module.exports = db;
