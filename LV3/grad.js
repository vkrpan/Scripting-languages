function Grad(nazivGrada, brStanovnika, lat,long){
    this.NazivGrada = nazivGrada;
    this.BrojStanovnika = brStanovnika;
    this.Lat = lat;
    this.Long = long;
}

var oVirovitica = new Grad("Virovitica", 15000, 45.83194,17.38389);
var oSlatina = new Grad("Slatina", 8000, 45.70333,17.70278);
var oBjelovar = new Grad("Bjelovar", 10000, 45.89861,16.84889);
var oOsijek = new Grad("Osijek", 65000, 45.55111,18.69389);
var oZagreb = new Grad("zagreb", 850000, 45.81444, 15.97798);

Grad.prototype.dajVelicinuGrada = function(){
    if(this.BrojStanovnika<30000){
        return 1;
    }
    else if(30000>this.BrojStanovnika<200000){
        return 2;
    }
    else if(this.BrojStanovnika>200000){
        return 3;
    }
}

function dajUdaljenost(Grad1, Grad2){
        var lat1 = Grad1.Lat;
        var long1 = Grad1.Long; 
        var lat2 = Grad2.Lat;
        var long2 = Grad2.Long; 
        var R = 6371; // km 
        var x1 = lat2-lat1;
        var dLat = x1 * Math.PI / 180;  
        var x2 = long2-long1;
        var dLon = x2 * Math.PI / 180;
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                        Math.cos(lat1* Math.PI / 180) * Math.cos(lat2* Math.PI / 180) * 
                        Math.sin(dLon/2) * Math.sin(dLon/2);  
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; 
        console.log(d);
}

dajUdaljenost(oVirovitica, oSlatina);
