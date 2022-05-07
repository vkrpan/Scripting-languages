$(document).ready(e =>{
    
})
var cntr = 0;

$("#btnUnos").click(e =>{
    e.preventDefault();
    var input = $("#unoss").val();
    console.log(input);
    $("#lista").append('<li id='+cntr+'><input type="checkbox" onclick=Crta('+cntr+')><button onclick=Delete('+cntr+')><i class="fa fa-trash" aria-hidden="true"></button></i>'+input+'</li>');
    cntr++;
    $("#unoss").val("");
})

$("#"+cntr).click(e =>{
    console.log(this);
    $(this).remove();
})

function Delete(id){
    $("#"+id).remove();

}




