function _lib(selector){
    this.selector = selector;
    this.el = document.querySelectorAll(this.selector);
}

_lib.prototype.ubaciElement = function(index,naziv, klasa, identifikator, tekst){
    if(isNullOrEmpty(naziv)){
        throw("Morate unijeti naziv elementa");
    }
    else{
        var doc = document.createElement(naziv);
        if(!isNullOrEmpty(klasa)) doc.setAttribute("class", klasa);
        if(!isNullOrEmpty(identifikator)) doc.setAttribute("id",identifikator);
        if(!isNullOrEmpty(tekst)) doc.innerHTML = tekst;
        this.el[index].appendChild(doc);
    }
}

_lib.prototype.dodajKlasu = function(klasa){
    this.el.forEach((value)=>{
        value.setAttribute("class", klasa);
    })
}
_lib.prototype.dodajAtribut = function(attrName, attrVal){
    this.el.forEach((value)=>{
        value.setAttribute(attrName, attrVal);
    })
}
_lib.prototype.prikazi = function(elIndex){
    this.el[elIndex].setAttribute('style', 'visibility:visible');
}
_lib.prototype.sakrij = function(elIndex){
    this.el[elIndex].setAttribute('style', 'visibility:hidden');
}

function isNullOrEmpty(str){
    return str ===null || str.match(/^ *$/) !==null;
}