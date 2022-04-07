import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi = [];

for(var i=0;i<200;i++){
    aBrojevi.push(dajSlucajanBroj(150,1500));
}

aBrojevi.forEach((value)=> {
    console.log(value);
});

console.log("Najveci je: "+Math.max(...aBrojevi));
console.log("Najmanji je: "+Math.min(...aBrojevi));