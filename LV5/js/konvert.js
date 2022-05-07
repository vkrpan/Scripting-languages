var mapa = new Map();
mapa.set('Euro', 7.530891);
mapa.set('USD', 7.157282);
mapa.set("GBP", 8.954686);
mapa.set('CHF',7.297375);
mapa.set('PLN', 1.609647);

$(document).ready(e =>{
    mapa.forEach((value, key, map) =>{
        let kljucevi = mapa.keys();
        $("#prviSelect").append('<option>'+key+'</option>');
        $("#drugiSelect").append('<option>'+key+'</option>');
    });
})

$("#btnConvert").click(e =>{
    e.preventDefault();
    var odabranPrvi = $("#prviSelect").val();
    var odabranDrugi = $("#drugiSelect").val();
    var unosKol = $("#unosKolicine").val();

    if(odabranPrvi == odabranDrugi){
        $("#output").val(unosKol);
    }
    else{
        mapa.forEach((value, key, map)=>{
            if(key==odabranPrvi){
                var VrijednostKuna=unosKol*value;
                mapa.forEach((value2, key2, map2) => {
                    if(key2==odabranDrugi){
                        var pomocna = VrijednostKuna/value2;
                        console.log(value2,map2, key2);
                        $("#output").val(pomocna);
                    }
                })
            }
        });
    }


})