import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import React from 'react';

function Dodaj() {
    const navigate = useNavigate();
    const [naziv, setNaziv] = useState("");
    const [proizvodac, setProizvodac] = useState("");
    const [model, setModel] = useState("");
    const [cijena, setCijena] = useState("");
    const [kolicina, setKolicina] = useState("");

    const dodajArtikl = async(event) => {
        try {
          event.preventDefault();
          await insertArtikl(noviArtikl);
          navigate("/");
        } catch (error) { throw error;}    
      };

    const noviArtikl = {
        naziv: naziv,
        proizvodac: proizvodac,
        model: model,
        cijena: cijena,
        kolicina: kolicina
    }

    const insertArtikl  = async (artiklObj) => {
        const noviArtikl = await axios.post('http://localhost/LV8/php/create.php',{
          naziv: artiklObj.naziv,
          proizvodac: artiklObj.proizvodac,
          model: artiklObj.model,
          cijena: artiklObj.cijena,
          kolicina: artiklObj.kolicina
        });
        return noviArtikl.data;
      }


    const dodaj = "Dodaj artikl"

    return(
        <div className='container'>
            <form onSubmit={dodajArtikl}>
                <div className="row mt-3">
                    <label className="form-label col-sm-2">Unesite naziv artikla:</label>
                    <div className='col-sm-8'>
                        <input
                        className="form-control"
                        type="text"
                        value={naziv}
                        onChange={(e) => setNaziv(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <label className="form-label col-sm-2">Unesite proizvođala artikla:</label>
                    <div className='col-sm-8'>
                        <input
                        className="form-control"
                        type="text"
                        value={proizvodac}
                        onChange={(e) => setProizvodac(e.target.value)}
                        />
                    </div>
                </div>       
                <div className="row mt-3">
                    <label className="form-label col-sm-2">Unesite model artikla:</label>
                    <div className='col-sm-8'>
                        <input
                        className="form-control"
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        />
                    </div>
                </div>       
                <div className="row mt-3">
                    <label className="form-label col-sm-2">Unesite cijenu artikla:</label>
                    <div className='col-sm-8'>
                        <input
                        className="form-control"
                        type="number"
                        value={cijena}
                        onChange={(e) => setCijena(e.target.value)}
                        />
                    </div>
                </div>       
                <div className="row mt-3">
                    <label className="form-label col-sm-2">Unesite količinu artikla:</label>
                    <div className='col-sm-8'>
                        <input
                        className="form-control"
                        type="text"
                        value={kolicina}
                        onChange={(e) => setKolicina(e.target.value)}
                        />
                    </div>
                </div>       
                <input className="btn btn-primary mt-3" type="submit" value={dodaj} />
            </form>
        </div>
    )   
}

export default Dodaj;