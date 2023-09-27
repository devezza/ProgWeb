const express = require("express");
const app = express();
const PORT = 3000;

app.use("/img", [express.static(`${__dirname}/../public/img`)
]);

app.use((req,res)=>{
    res.end("Acesse o arquivo /img/maca.png");
});

app.listen(PORT, () =>{
    console.log(`Express app iniciado na porta ${PORT}`);
});

