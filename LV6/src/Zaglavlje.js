import React from "react";
import logo from './logo.svg'

function Zaglavlje(props){
    return(
        <div className="zaglavlje">
            <nav className="navbar navbar-light bg-light">
                <img src={logo} className="d-inline-block align-top" width="30" height="30"/>
                <h1 className="navbar-brand">VUV Trgovina</h1>
            </nav>
        </div>
    )
}


export default Zaglavlje;


{/* <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Bootstrap
  </a>
</nav> */}