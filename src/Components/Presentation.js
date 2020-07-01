import React from 'react';
import logo from './logo.svg';

function Presentation() {
    return (
        <div className="diveprincipal">
            <div className="dive1">
                <h1>TP gestion de clients et utilisation d’API</h1>
                <p className="para">
                <span><strong>Non : TOIWILOU HASSANE</strong></span><br></br><br></br>
                <span><strong>Adresse : 13 Rue Saint Georges 94480 Ablon-Sur-Seine</strong></span><br></br><br></br>
                <span><strong>E-mail : toiwilouhassane@gmail.com</strong></span><br></br><br></br>
                <span><strong>Téléphone : 0623524131</strong></span><br></br><br></br>
                </p>
            </div>
            <div className="dive2">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        </div>
    );
}

export default Presentation;