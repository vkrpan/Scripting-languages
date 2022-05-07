var cntr = 1;
function Prev(){
    cntr--;
    if(cntr==0){
        cntr=5;
        $("#sliderContainer").html('<img id="slika" src="img/slider_'+cntr+'.jpg" data-slika-id="'+cntr+'">');
    }
    else{
        $("#sliderContainer").html('<img id="slika" src="img/slider_'+cntr+'.jpg" data-slika-id="'+cntr+'">');
    }

}

function Next(){
    cntr ++;
    if(cntr==6){
        cntr=1;
        $("#sliderContainer").html('<img id="slika" src="img/slider_'+cntr+'.jpg" data-slika-id="'+cntr+'">');
    }
    else{
        $("#sliderContainer").html('<img id="slika" src="img/slider_'+cntr+'.jpg" data-slika-id="'+cntr+'">');
    }

   
}