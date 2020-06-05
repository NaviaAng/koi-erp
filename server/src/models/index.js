const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';

const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db[env].database,
  config.db[env].user,
  config.db[env].password,
  config.db[env].options
)

fs
  .readdirSync(__dirname)
  .filter((file)=>
    file != 'index.js'
  )
  .forEach((file)=>{
    const model = sequelize.import(path.join(__dirname,file))
    db[model.name] = model
  }
  )

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db