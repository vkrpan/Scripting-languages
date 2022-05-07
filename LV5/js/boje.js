
function GetRandomColor(){
    var slova ="0123456789ABCDEF";
    var boja = "#";

    for(let i=0;i<6;i++){
        boja+=slova[Math.floor(Math.random() *16)];
    }
    $("body").attr('style', 'background-color:'+boja);
    $("h2").text(boja);

}