const Sequelize = require('sequelize');
const sequelize = new Sequelize('cadastro','root','5500',{
    host:"localhost",
    dialect: 'mysql'
});
// Criando tabela
const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
});
// Postagem.sync({force: true});

// Adicinando dados
// Postagem.create({
//     titulo:"asdifoasmndofnamsodnfaosdnf",
//     conteudo: "asdoisdnfoansdofnasoidfnaosidfnio"
// })

const usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
});
// usuario.sync({force:true});
usuario.create({
    nome: "Emerson Patryck",
    sobrenome:" Silva",
    idade: 25,
    email: "emeps@outlook.com"
})