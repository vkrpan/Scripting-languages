function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
}

var rand= require('./slucajanBroj.js');
var aBrojevi = [];
for(var i=0;i<30;i++){
    aBrojevi.push(rand.dajSlucajanBroj(10,200));
}
aBrojevi.forEach(value =>{
    console.log(value);
})
  
bubbleSort(aBrojevi);
console.log(aBrojevi);