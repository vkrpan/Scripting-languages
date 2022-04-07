var aPolje = [];
var i = 1;
while(aPolje.length<50){
    if(i%7==0){
        aPolje.push(i);
    }
    i++;
}
var aParniBrojevi = [];
aPolje.forEach((value) =>{
    if(value%2==0){
        aParniBrojevi.push(value);
    }

});

aParniBrojevi.forEach((value) =>{
    console.log(value);
})
