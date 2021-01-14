const Sequelize = require('sequelize');
const sequelize = new Sequelize('cadastro','root','5500',{
    host:"localhost",
    dialect: 'mysql'
});

// Conectando no banco de dados
sequelize.authenticate().then(()=>{
    console.log('Conected!')
}).catch((erro)=>{
    console.error(`Failed Conection ${erro}`);
})