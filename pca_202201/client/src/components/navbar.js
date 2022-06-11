import React from "react";
import "../styles/navbar.css"
import "../styles/index.css"
import { Link } from "react-router-dom"

function Navbar () {
    return (
        <div className="navbar-main">
            <div className="navbar-main-div">
                <ul className="navbar-nav">
                    <h1>LOGO</h1>
                    <div className="navbar-nav-div">
                        <Link to={"/home"} className="navbar-nav-div-button-link"><button className="navbar-nav-div-button">Home</button></Link>
                        <Link to={"/agendamento"} className="navbar-nav-div-button-link"><button className="navbar-nav-div-button">Agendar</button></Link>
                        <Link to={"/ver-agendamentos"} className="navbar-nav-div-button-link"><button className="navbar-nav-div-button">Agendamentos</button></Link>
                        <Link to={"/link"} className="navbar-nav-div-button-link"><button className="navbar-nav-div-button">Sobre</button></Link>
                    </div>
                    <button className="navbar-nav-button">Contato</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;