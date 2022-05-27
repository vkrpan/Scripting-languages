import React from "react";

function Artikl(props){
    return(
        <tr>
            <td>
                {props.Id}
            </td>
            <td>
                {props.Naziv}
            </td>
            <td>
                {props.Proizvodac}
            </td>
            <td>
                {props.Model}
            </td>
            <td>
                {props.Cijena}
            </td>
            <td>
                {props.Kolicina}
            </td>
            <td>
                {props.Kolicina> 0 ? <DodajKosaru kol={props.Kolicina}/> : <PosaljiUpit /> }
            </td>
        </tr>
    )
}

function DodajKosaru(props){
        return(
            <button onClick={() => klik(props.kol)}>Dodaj u košaricu</button>
        )

}

function PosaljiUpit(){
    return(
        <button onClick={() => alert("Artikl nije dostupan!")}>Pošalji upit</button>
    )
}
function klik(koll){
    alert("Količina je"+koll);
}
export default Artikl;