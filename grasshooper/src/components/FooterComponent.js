import React, { Component } from "react";
import '../styles/FooterStyle.css';
export class FooterComponent extends Component {
    render() {
        return (
        
                 <div className="footer">
                <div className="row" >
                    <div className="col-11 col-md-4">
                        <h4> Ubicacion</h4>
                        <h5><span className="fa fa-location-arrow"></span> Juan Jose Flores y Antonio Flor 12-45</h5>
                    </div>
                    <div className="col-11 col-md-4">
                        <h4 className=""> <span className="fa fa-phone">+593 008439843</span></h4>
                        <span className="fa fa-whatsapp">0094938343</span>
                    </div>
                    <div className="col-11 col-md-4">
                        <h5><span className="fa fa-facebook"></span>The Grasshooper.com</h5><br />
                        <h5><span className="fa fa-instagram"></span>Grasshooper.inc.com</h5><br />
                    </div>

                </div>
            </div>
         
           
        );
    }
}
export default FooterComponent;