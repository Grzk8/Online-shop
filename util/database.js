const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'j123db', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;