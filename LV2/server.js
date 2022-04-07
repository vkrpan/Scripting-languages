//  Volume in drive C has no label.
//  Volume Serial Number is 0EC9-E8DD

//  Directory of C:\Users\astudent\Desktop\SPJ LV2\vatroslav_krpan

// 04/07/2022  08:58 AM    <DIR>          .
// 04/07/2022  08:58 AM    <DIR>          ..
// 04/07/2022  08:58 AM                 0 server.js
//                1 File(s)              0 bytes
//                2 Dir(s)   5,880,283,136 bytes free

var http = require('http');
var nPort = 8008;
var sIme = "Vatroslav Krpan";
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
response.write(sIme);
response.end();
}).listen(nPort);