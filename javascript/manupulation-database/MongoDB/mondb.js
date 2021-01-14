const mongoose = require('mongoose');

// Conexão e criação do bando de dados
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testing',{
    useNewUrlParser:true,
    useUnifiedTopology:true
    // useMongoClient:true  NÃO É MAIS NECESSARIO VS 5.X+
}).then(()=>{
    console.log('MongoDB Conectado');
}
).catch(erro =>{
    console.log(`Houve um erro:${erro}`);
});

// Model - Usuarios
const UserSchema = mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    idade:{
        type: Number,
        require: true
    },
    pais:{
        type: String,
        require: false
    }
})
// Criação do Schema - Collection
mongoose.model('users', UserSchema );
// Cadastrar
const newUser = mongoose.model('users');
new newUser({
    nome:'Emerson Patryck da Silva',
    email:'emeps@outlook.com',
    idade: 30,
    pais: 'Brazilian'
}).save().then(()=>{
    console.log('Usuario Salvo');
}).catch((erro)=>{
    console.log(`Erro: ${erro}`)
})
