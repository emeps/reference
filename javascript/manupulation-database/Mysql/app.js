const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 9003;
const chalk = require('chalk');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');


/* ******************Configuração****************** */
// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Rotas
app.get('/', function(req, res){
    // retorando valores do banco de dadosk
    // res.render('home',{nome: "Emerson Patryck"});
    Post.findAll({order:[['id','DESC']]}).then((posts) =>{
        res.render('home',{posts:posts});
    })

})
app.get('/card', (req, res) => {
    res.render('forms');
});
app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/');
    }).catch((erro) => {
        res.send(`Erro:${erro}`);
    })
})
app.get('/delete/:id',(req, res)=>{
    Post.destroy({where:{'id':req.params.id}}).then(()=> res.redirect('/')
    ).catch(erro => res.send(`Erro ao deletar. Erro: ${erro}`));
});



app.listen(port, hostname, () => {
    console.info('Servidor', chalk.green('ON'),
        '\nPORT:', chalk.blue(`${port}`),
        '\nHostname:', chalk.blue(`${hostname}`));
});