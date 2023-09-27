const handlebars = require('express-handlebars');
const express = require("express");
const PORT = 3000;

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views',`${__dirname}/views`);

app.get('/', function(req,res){
    res.render('index', {
        mensagem: 'Olá, você está aprendendo Express + HBS',
        layout: false
    });
});

app.listen(PORT, () =>{
    console.log(`Express app iniciado na porta ${PORT}`);
});
