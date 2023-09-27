const express = require("express");
const router = require("../config/routes.js");

const app = express();
app.use(router);

const PORT = 3000;


app.listen(PORT, () =>{
    console.log(`Express app iniciado na porta ${PORT}`);
});
