const express = require('express');
const app = express();
app.use(
    express.urlencoded({extended:true})
)
app.use(express.json())
app.post('https://api.github.com/users/emeps',(req, res)=>{
    console.log(req.body);
})