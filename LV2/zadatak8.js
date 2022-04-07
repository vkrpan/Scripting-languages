import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi = [];

for(var i=0;i<50;i++){
    aBrojevi.push(dajSlucajanBroj(1,20));
}

aBrojevi.forEach((value)=> {
    console.log(value);
});

var uniqueP = [... new Set(aBrojevi)];
console.log(uniqueP);