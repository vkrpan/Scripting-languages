import Artikl from './TrgovinaArtikl.js';
function Tablica(props){
    return(
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Naziv</th>
                    <th>Proizvođač</th>
                    <th>Model</th>
                    <th>Cijena</th>
                    <th>Količina</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {props.artikli.map((artikl)=> {
                    return(
                        <Artikl Id={artikl.Id} Naziv={artikl.Naziv} Proizvodac={artikl.Proizvodac} Model={artikl.Model} Cijena={artikl.Cijena} Kolicina={artikl.Kolicina}/>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Tablica;