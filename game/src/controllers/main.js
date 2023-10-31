const express = require("express");
const router = express.Router();
router.use('/img', [express.static(`${__dirname}/../../public/img`)]);

const index = (req,res) =>{
    const conteudo = 'Pagina inicial';
    res.render('main/index',{
        conteudo,
        layout: false
    });
};
const sobre = (req,res)=>{
    res.render('main/sobre',{
        imagem: `/img/jogo.png`,
        layout: false
    });
}

module.exports = {index,sobre}