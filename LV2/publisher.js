function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}
// var mqtt = require('mqtt');
// var client = mqtt.connect('mqtt://127.0.0.1');
// client.on('connect', function() {
//     console.log('Publisher is online!');
//     setInterval(function() {
//         var num = dajSlucajanBroj(10, 1000);
//         client.publish('num', `Random generirani broj je : ${num} \n`);
//         console.log('Message sent!');
//     }, 5000);
// });



var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');
client.on('connect', function() {
console.log('Publisher is online!');
setInterval(function() {
var temp = dajSlucajanBroj(10,1000);
client.publish('num', 'Broj je: ' + temp +"\n");

console.log()
}, 5000);
});