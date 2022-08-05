import React, { Component } from "react";
import logo from "../assets/logo.jpeg";
export class headerComponent extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img src= {logo} alt="grasshooper" height="34px" />
                    <a class="navbar-brand" href="#">The grasshooper2022</a>
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
                                <a class="nav-link active" aria-current="page" href="#">Reservas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Cosas para hacer</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tienda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Mapa</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacto</a>
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
};

export default headerComponent;