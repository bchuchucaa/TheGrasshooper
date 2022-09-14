import React, { Component } from "react";
import '../styles/Headerstyle.css';
import logo from "../assets/gant.png";

export class headerComponent extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img src= {logo} alt="grasshooper" height="34px" />
                    <a class="navbar-brand" href="/home">Grasshooper2022</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/reservas"><span className="fa fa-book"/> Reservas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/actividades"><span className="fa fa-gamepad"></span> Cosas para hacer</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/tienda"><span className="fa fa-shopping-bag"></span> Tienda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/mapa"><span className="fa fa-map-marker"></span>Mapa</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contacto"><span className="fa fa-info-circle"></span>Contacto</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            
        );
    }
}

export default headerComponent;