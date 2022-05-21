import React from "react";
import { Link } from "react-router-dom";

function Navigacija(){
    return(
        <nav>
            <Link className="button" to="/">Home</Link>
            <Link className="button"to="/ucitaj">Ucitaj tablicu</Link>
            <Link className="button" to="/Dodaj">Dodaj novi artikl</Link>
        </nav>
    )
}

export default Navigacija;