import React, { Component } from "react";
import logo from "../assets/gant.jpeg";
export class headerComponent extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <div class="container-fluid">
                    <img src= {logo} alt="grasshooper" height="34px" />
                    <a class="navbar-brand" href="/home">The grasshooper2022</a>
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
                                <a class="nav-link active" aria-current="page" href="/reservas">Reservas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/actividades">Cosas para hacer</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/tienda">Tienda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/mapa">Mapa</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contacto">Contacto</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled"
                                >Disabled</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default headerComponent;