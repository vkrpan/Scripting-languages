import {Link} from "react-router-dom";
import React from 'react';

function Navigacija(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button><Link className='navbar-brand' to="/">Početna</Link></button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className='nav-link' to="/dodaj">Dodaj</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Navigacija;