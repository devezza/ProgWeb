const handlebars = require(`express-handlebars`);
const express = require("express");
const logger = require("morgan");

const app = express();
const PORT = 3000;

app.engine("handlebars", handlebars.engine());
app.set("view engine","handlebars");
app.set("views",`${__dirname}/views`);
app.use(logger("short"));

app.use('/img', [express.static(`${__dirname}/img`)]);

app.get('/',function(req,res){
    res.render('index',{
        mensagem: 'Pagina principal',
        layout:false
    });
});

app.get("/sobre", (req,res)=>{
    res.render('sobre',{
        imagem: `/img/jogo.png`,
        layout: false
    })
})

app.listen(PORT, ()=>{
    console.log(`Express app iniciada na porta ${PORT}`);
});