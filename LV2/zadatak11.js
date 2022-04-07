// import * as data from './osobe.json';

var data = require('./osobe.json');
function zzz(data){
    console.log(data);
}

var http = require('http');
var nPort = 8000;
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
response.write(zzz(data));
response.end();
}).listen(nPort);