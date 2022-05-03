var a = new _lib("strong");
console.log(a);
a.el.forEach(element => {
    console.log(element);
});

a.ubaciElement(1,"h4", "klasa1","ident1", "tekst za upis u h4");

a.dodajKlasu("classOne");

a.dodajAtribut("attrName", "attrValue");

a.sakrij(1);

a.prikazi(1);

localStorage.setItem("racunarstvo","http://racunarstvo.vuv.hr");
localStorage.setItem("loomen","http://loomen.vsmti.hr");
localStorage.setItem("imagine", "http://e5.onthehub.com/d.ashx?s=ui4qkso06k");
localStorage.setItem("studentski_dom", "http://studom.vsmti.hr");
localStorage.setItem("office365", "https://outlook.office365.com/owa/?realm=vsmti.hr#path=/mail");


var footer = new _lib('.footer-navigation');
// console.log(footer.el);

// footer.el.forEach(val =>{
//     console.log(val);
// })

// for(var i=0;i<localStorage.length;i++){
//     footer.ubaciElement(0,'li',"",localStorage.key(i),"");
//     var liElement = new _lib(`#${localStorage.key(i)}`);
//     liElement.ubaciElement(0,'a','','', localStorage.key(i));
//     var aLink = new _lib(`#${localStorage.key(i)} a`);
//     aLink.dodajAtribut('href', localStorage.getItem(localStorage.key(i)));
// }