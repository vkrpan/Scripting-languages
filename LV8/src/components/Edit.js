import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate,  useParams} from 'react-router-dom';
import React from 'react';

function Edit() {
    const navigate = useNavigate();
    const params = useParams();
    let artiklID = params.ID;
    const [naziv, setNaziv] = useState("");
    const [proizvodac, setProizvodac] = useState("");
    const [model, setModel] = useState("");
    const [cijena, setCijena] = useState("");
    const [kolicina, setKolicina] = useState("");

    useEffect(()=> {
      getArtikl(artiklID);
    }, []);

    
    async function getArtikl(artiklID){
        try {
          const response = await axios.get(`http://localhost/LV8/php/getOneArtikl.php?ID=${artiklID}`);
        setNaziv(response.data[0].Naziv);
        setProizvodac(response.data[0].Proizvodac);
        setModel(response.data[0].Model);
        setCijena(response.data[0].Cijena);
        setKolicina(response.data[0].Kolicina);
        } catch (error) { throw error;}    
      };

    const azurirajArtikl  = async (event) => {
        event.preventDefault();
        let AzuriranArtikl = {naziv, proizvodac, model, cijena, kolicina};
        await UpdateArtikl(AzuriranArtikl);
        navigate("/");
      }

      const UpdateArtikl  = async (artiklObj) => {
        console.log(artiklObj);
        const noviArtikl = await axios.post('http://localhost/LV8/php/azuriraj.php',{
          nazivPHP: artiklObj.naziv,
          proizvodacPHP: artiklObj.proizvodac,
          modelPHP: artiklObj.model,
          cijenaPHP: artiklObj.cijena,
          kolicinaPHP: artiklObj.kolicina,
          idPHP: artiklID
        });
        return noviArtikl.data;
      }
    const azuriraj = "Ažuriraj artikl";

    return(
        <div className='container'>
            <form onSubmit={azurirajArtikl}>
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
                <input className="btn btn-primary mt-3" type="submit" value={azuriraj} />
            </form>
        </div>
    )   
}


export default Edit;