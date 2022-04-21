function kompleksniBroj(Re, Im){
    this.Real = Re;
    this.Imag = Im;
}

var oKomp1 = new kompleksniBroj(1.5, 1);
var oKomp2 = new kompleksniBroj(1.32, -0.5);
var oKomp3 = new kompleksniBroj(0.5, -1);
var oKomp4 = new kompleksniBroj(1.8, 2);
var oKomp5 = new kompleksniBroj(1.78, 2.3);

var _kb = {
    ispisiKompleksniBroj : function(oKompBr){
        var z = oKompBr.Real + oKompBr.Imag;
        return z;
    },
    zbroji : function(komp1, komp2){
        return oZbroj = new kompleksniBroj(parseFloat(komp1.Real)+parseFloat(komp2.Real), parseFloat(komp1.Imag)+parseFloat(komp2.Imag));
    },
    pomnozi : function(komp1, komp2){
        // console.log(komp1);
        // console.log(komp2);
        var kRe1 = parseFloat(komp1.Real);
        var kIm1 = parseFloat(komp1.Imag);
        var kRe2 = parseFloat(komp2.Real);
        var kIm2 = parseFloat(komp2.Imag);
        var newRe = (kRe1*kRe2)-(kIm1*kIm2);
        var newIm = (kIm1*kRe2)+(kRe1*kIm2);
        var oZbroj = new kompleksniBroj(newRe, newIm);
        console.log(oZbroj)
        return oZbroj;
    }
}

// console.log(_kb.ispisiKompleksniBroj(oKomp1));
// console.log(_kb.ispisiKompleksniBroj(oKomp2));
// console.log(_kb.ispisiKompleksniBroj(oKomp3));
// console.log(_kb.ispisiKompleksniBroj(oKomp4));
// console.log(_kb.ispisiKompleksniBroj(oKomp5));



$("#unos").click(() =>{
    var komplex1 = new kompleksniBroj($("#z1real").val(),$("#z1imag").val());
    var komplex2 = new kompleksniBroj($("#z2real").val(),$("#z2imag").val());
    if($("#odaberi option:selected").text() == "mnozenje"){
        var rez = _kb.pomnozi(komplex1,komplex2);
        $("#z3real").val(rez.Real);
        $("#z3imag").val(rez.Imag);
    }
    else if($("#odaberi option:selected").text() == "zbrajanje"){
        var rez = _kb.zbroji(komplex1,komplex2);
        $("#z3real").val(rez.Real);
        $("#z3imag").val(rez.Imag);
    }
})