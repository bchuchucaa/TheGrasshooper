import React, { Component } from "react";
import logo from "../assets/logo.jpeg";
export class HomeComponent extends Component {
    render() {
        return (
            <div className="container" style={{
                backgroundImage:
                    "url('https://img.freepik.com/fotos-premium/crepusculo-oceano-noria-iluminada-parque-atracciones-muelle-playa-santa-monica-estados-unidos_333216-9.jpg')",
            }}>
                <div className="" >
                    
                    <h2>BIENVENIDOS A THE GRASSHOOPER 2022</h2>
                    <h1>ES UN GUSTO CONOCERTE..!</h1>
                    <img src={logo} className="App-logo" alt="logo" />

                </div>

            </div>

        );
    }
}

export default HomeComponent;