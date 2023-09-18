const fs = require('fs')
const http = require('http');

process.argv.forEach((val,index)=>{
    diretorio = val
});

const server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/htmls;charset=utf-8'});
    fs.readdir(diretorio, (err,files)=>{
        if (err){
            console.log(err)
        }else{
            files.forEach(file => {
                console.log(file);
                res.write(file + '\n');
            });
            res.end();
        }
    });
});

server.listen(3333)

