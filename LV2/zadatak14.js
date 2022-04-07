var radn = require('./slucajanBroj.js');

var broj = radn.dajSlucajanBroj(11,5000);
console.log(broj);

function firstDigit(n)
{

    while (n >= 10)
        n /= 10;
   

    return Math.floor(n);
}


function lastDigit(n)
{

    return Math.floor(n % 10);
}

console.log(firstDigit(broj) + " "
+ lastDigit(broj));