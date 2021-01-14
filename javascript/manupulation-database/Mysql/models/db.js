const Sequelize = require('sequelize');
// Conexão com bando de dados
const sequelize = new Sequelize('postapp', 'root', '5500', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = {
    Sequelize,
    sequelize
};
