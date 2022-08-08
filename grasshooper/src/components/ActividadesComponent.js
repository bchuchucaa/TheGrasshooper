import React, { Component } from "react";
import piscina from "../assets/activities/pool.jpeg";
import saltarinas from "../assets/activities/saltarinas.jpeg";
export class ActividadesComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 justify-content-center">
                        <h1>Toda la diversion en mi lindo Giron</h1>
                        <h3>Descubre lo que puedes esperar durante tu próxima visita y asegúrate de volver a visitar esta página, ya que la información se actualiza con frecuencia.</h3>
                        
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-6">
                        <h3>Te Damos la Bienvenida de Vuelta a The grasshooper</h3>
                        <p>Las autoridades de salud pública, los funcionarios gubernamentales y nuestro equipo de expertos en salud y seguridad continúan monitoreando cuidadosamente las condiciones de salud y seguridad, y siguen adaptando las pautas según sea necesario.</p>
                    </div>
                    <div className="col-6">
                        <img src={piscina} height="400px"/>
                        <img src={saltarinas} height="400px" width="98%"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default ActividadesComponent;