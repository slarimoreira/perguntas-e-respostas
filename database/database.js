const Sequelize = require('sequelize');


const connection = new Sequelize('guia_perguntas', 'root', 'lariLind@19',{
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = connection;