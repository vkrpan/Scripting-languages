import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link, Outlet} from 'react-router-dom';

const readUrl = "http://localhost/LV7/php/read.php";
console.log(readUrl);
function Ucitaj(){


    const[artikli, setArtikl] = useState([]);
    useEffect(() => {
        getArtikli();
    }, []);

    async function getArtikli(){
        try{
            const response = await axios.get(readUrl);
            setArtikl(response.data);
            console.log(response);
        }
        catch(error){
            console.error(error);
        }
    }
    var cntr  = 0;
    return(

        <table>
            <thead>
                <tr>
                    <th>r.Br.</th>
                    <th>Naziv</th>
                    <th>Proizvodac</th>
                    <th>Model</th>
                    <th>Cijena</th>
                    <th>Kolicina</th>
                </tr>
            </thead>
            <tbody>
                {artikli.map((artikl) => {
                    cntr++;
                    return(<tr key={artikl.Id.toString()}>
                        <td>{cntr}</td>
                        <td>{artikl.Id}</td>
                        <td>{artikl.Naziv}</td>
                        <td>{artikl.Proizvodac}</td>
                        <td>{artikl.Model}</td>
                        <td>{artikl.Cijena}</td>
                        <td>{artikl.kolicina}</td>
                    </tr>)
                    
                })}
            </tbody>
        </table>
    )
}

export default Ucitaj;