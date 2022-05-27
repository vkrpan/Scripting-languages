import React from "react";
import Artikl from "./TrgovinaArtikl";
function Tablica(props){
  return(
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Naziv</th>
          <th>Proizvođač</th>
          <th>Cijena</th>
          <th>Količina</th>
          <th>Naruči</th>
        </tr>
      </thead>
      <tbody>
        {props.artikli.map((artikl) => {
          return(
            <Artikl Id={artikl.Id} Naziv={artikl.Naziv} Proizvodac={artikl.Proizvodac} Model={artikl.Model} Cijena={artikl.Cijena} Kolicina={artikl.Kolicina}/>
          )
        })}
      </tbody>
    </table>
  )
}

export default Tablica;