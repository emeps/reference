const express = require('express');
const body = require('body-parser');
const { response } = require('express');
const app = express();

app.use(body.urlencoded({extended: true}));
app.post('/users', (req, res)=>{
    console.log((req.body));
    res.send('<h1>Parabéns</h1>');
});
app.listen(3003);