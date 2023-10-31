const handlebars = require(`express-handlebars`);
const express = require("express");
const logger = require("morgan");
const router = require('../../src/router/router');
const app = express();
const PORT = 3000;

app.engine("handlebars", handlebars.engine());
app.set("view engine","handlebars");
app.set("views",'../../src/views/');
app.use(logger("short"));
app.use(router);


app.listen(PORT, ()=>{
    console.log(`Express app iniciada na porta ${PORT}`);
});