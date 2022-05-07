$(document).ready(function()
{
	
});
$("#unos").click(e =>{
    e.preventDefault();
    var ime = $("#ime").val();
    var prezime = $("#prezime").val();
    var JMBAG = $("#jmbag").val();
    var oib = $("#oib").val();
    var datRod = $("#datRod").val();
    var adress = $("#adresa").val();
    var postBroj = $("#pBroj").val();
    var grad = $("#grad").val();
    console.log(ime);
    console.log(prezime);
    console.log(JMBAG);
    console.log(oib);
    console.log(datRod);
    console.log(adress);
    console.log(postBroj);
    console.log(grad);

    if(ime==""|| prezime=="" || JMBAG=="" || oib =="" || datRod=="" || adress=="" || postBroj=="" || grad==""){
        alert("Nisu popunjena sva polja!");
    }
    else{
        if(isNumeric(JMBAG) && isNumeric(oib) && isNumeric(postBroj)){
            var check = datRod.split('-');
            if(!datRod.includes('-')){
                alert("Unesite datum u obliku dd-mm-yyyy");
            }
            else{
                if(check[0]<31 && check[0]>0 && check[1]>0&&check[1]<12){
                    var date = datRod.split('-');
                    var datummm = `${date[2]}-${date[1]}-${date[0]}`
                    var obj = {
                        im: ime,
                        prez: prezime,
                        jmbag: JMBAG,
                        OIB: oib, 
                        dat: datummm,
                        add: adress,
                        pBroj: postBroj,
                        dgra: grad
                    };
                    console.log(obj);
                }
                else{
                    alert("Unesite datum u obliku dd-mm-yyyy");
                }
            }
        }
        else{
            alert("JMBAG, OIB i poštanski broj moraju biti u numeričkom obliku!");
        }

    }
})




function isNumeric(value){
    var x = parseInt(value);
    if(isNaN(x)){
        return false;
    }
    else{
        return true;
    }
}