function Printer(nivo_tonera, dvostrano_ispisivanje){
    if(nivo_tonera>0 && nivo_tonera<100){
        this.nivoTonera = nivo_tonera;
    }
    this.dvostranoIspisivanje = dvostrano_ispisivanje;
    this.ukupanBrojStranica = 0;
}

var oPrinter1 = new Printer(40, true);
var oPrinter2 = new Printer(56, true);
var oPrinter3 = new Printer(26, false);
var oPrinter4 = new Printer(87, true);
var oPrinter5 = new Printer(71, false);

Printer.prototype.dodajBoju = function(amount){
    if(this.nivoTonera+=amount>100){
        console.log("Previše boje za nadopunu!")
        console.log("Trenutni nivo tonera je: " + this.nivoTonera+ " te je moguce dopuniti jos: "+(100-this.nivoTonera));
    }
    else{
        this.nivoTonera +=amount;
    }

}

Printer.prototype.Print = function(brStr){
    this.ukupanBrojStranica= parseInt(this.ukupanBrojStranica) + parseInt(brStr);
    console.log(this.ukupanBrojStranica);
    for(let i=0;i<parseInt(brStr);i++){
        // if(this.dvostranoIspisivanje){
        //     this.nivoTonera = parseFloat(this.nivoTonera) - 0.2;
        // }
        // else{
        //     this.nivoTonera-=0.1;
        // }

        this.nivoTonera = parseFloat(this.nivoTonera) - 0.1;
    }
}
Printer.prototype.ukBrIsprintanihStranica = function(){
    return this.ukupanBrojStranica;

}

Printer.prototype.trenutniNivoTonera = function(){
    return this.nivoTonera;
}

console.log(oPrinter1);
oPrinter1.Print(10);
console.log(oPrinter1.ukBrIsprintanihStranica());
console.log(oPrinter1.trenutniNivoTonera());