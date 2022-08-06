import React,{ Component } from "react";
import logo from "../assets/logo.jpeg";

export class ReservasComponent extends Component{
    render(){
        return(
            <div className="container">
                <h1>ReservasComponent</h1>
                <h2>hola hola</h2>
                <img src={logo}/>
            </div>
        );
    }

}
export default ReservasComponent;