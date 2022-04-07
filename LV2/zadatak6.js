import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi = [];

for(var i=0;i<100;i++){
    aBrojevi.push(dajSlucajanBroj(50,5000));
}
var parniCntr = 0;
var NeParni = 0;
aBrojevi.forEach((value) =>{
    if(value%2==0){
        parniCntr++;
    }
    else{
        NeParni++;
    }
});

console.log("Parnih ima: " + parniCntr +", a neparnih: "+ NeParni);