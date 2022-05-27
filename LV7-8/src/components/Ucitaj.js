import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import React from 'react';


const readUrl = "http://localhost/LV7-8/php/read.php";
function Ucitaj(){
    const [artikli, setArtikl] = useState([]);
    const [q, setQ] = useState("");
    let navigate = useNavigate();
    useEffect(() => {
        getArtikli();
        }, []);

        async function getArtikli() {
            try {
              const response = await axios.get(readUrl);
              setArtikl(response.data)
            } 
            catch (error) {
              console.error(error);
            }
          }

          async function DeleteArtikl(idspecc){
              console.log(idspecc);
              const response = await axios.delete(`https://localhost/LV7-8/php/delete.php`, {
                data:idspecc
              });
              setArtikl(artikli.filter((p) => p.id!==idspecc));
              console.log(response);
          }

          function obrisi(idArtikla){
            if(window.confirm('Jeste li sigurni da želite obrisani artikl?')){
               DeleteArtikl(idArtikla);
            }
          }

          function search(rows){
            return rows.filter(
              (row) => 
                row.Naziv.toLowerCase().indexOf(q)>-1 || 
                row.Proizvodac.toLowerCase().indexOf(q)>-1 ||
                row.Model.toLowerCase().indexOf(q)>-1 ||
                row.Cijena.toLowerCase().indexOf(q)>-1 ||
                row.Kolicina.toLowerCase().indexOf(q)>-1
                );

          }
          var pretraga = search(artikli);
    return (
        <>
              <input type="text" value={q} onChange={(e) => setQ(e.target.value)}/> 
            <div>
              <table className="table table-striped">
              <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Naziv</th>
                    <th scope="col">Proizvođač</th>
                    <th scope="col">Model</th>
                    <th scope="col">Cijena</th>
                    <th scope="col">Količina</th>
                  </tr>
              </thead>
              <tbody>
                  {pretraga.map((artikl)=>{
                  return (<tr key={artikl.id.toString()}>
                            <td>{artikl.id}</td>
                            <td>{artikl.Naziv}</td>
                            <td>{artikl.Proizvodac}</td>
                            <td>{artikl.Model}</td>
                            <td>{artikl.Cijena}</td>
                            <td>{artikl.Kolicina}</td>
                            <td><button className='btn btn-outline-danger' onClick={() => obrisi(artikl.id)}>Obriši</button></td> 
                            <td><button className='btn btn-outline-danger'  onClick={() => { navigate(`/edit/${artikl.id}`)}}>Ažuriraj</button></td>
                          </tr>)
                  })}
              </tbody>
              </table>
            </div>
        </>
    )

}

export default Ucitaj;