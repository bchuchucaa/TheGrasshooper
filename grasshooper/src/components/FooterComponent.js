import React, { Component } from "react";
import '../styles/FooterStyle.css';
export class FooterComponent extends Component {
    render() {
        return (
        
                 <div className="footer">
                <div className="row" >
                    <div className="col-11 col-md-4">
                        <h5><span className="fa fa-location-arrow"></span> Juan Jose Flores y Antonio Flor 12-45</h5>
                    </div>
                    <div className="col-11 col-md-4">
                       <h5> <span className="fa fa-whatsapp"> 0094938343</span></h5>
                    </div>
                    <div className="col-11 col-md-4">
                        <div className="row">
                        <h5><span className="fa fa-facebook"></span><span className="fa fa-instagram"></span> TheGrasshooper.com</h5>
                        
                        </div>
                       
                    </div>

                </div>
            </div>
         
           
        );
    }
}
export default FooterComponent;