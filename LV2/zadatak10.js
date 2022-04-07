// import dajSlucajanBroj from './slucajanBroj.js';

// function dajSlucajanBroj(nMin, nMax)
// {
//  return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
// }

var rand = require("./slucajanBroj");
function zzz(){
    for(var i =0;i<10;i++){
        console.log(String(rand.dajSlucajanBroj(10,100)+'\n'));
    }
}

var http = require('http');
var nPort = 8000;
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
response.write(zzz());
response.end();
}).listen(nPort);