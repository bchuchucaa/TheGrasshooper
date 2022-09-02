import React, { Component } from "react";
import LogIn from "./LogIn";
import "../styles/HomeStyle.css";
import logo from "../assets/gant.png";
export class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            show:false
        }
    }
    showModal(e) {
        console.log("se trata de cambair");
        this.setState({
            show:true
        })
    }
    render() {
        return (
            <div>
                <header class="jumbotron">
                
        <div>
            <div class="row row-header">
                <div class="col-12 col-sm-6">
                    <h1>The Grasshooper</h1>
                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our
                        lipsmacking creations will tickle your culinary senses!</p>
                </div>
                <div class="row col-sm-6">
                    <div class="col-12 col-sm-6 align-self-center">
                        <img src={logo} class="img-fluid" height="30px" />
                    </div>
                    <div class="col-12 col-sm-6 align-self-center">
                        <button id="logInButton" class="btn btn-warning btn-sm btn-block" onClick={(e)=> {this.showModal()}}>
                           Inicia Sesion
                        </button>
                        <LogIn show= {this.state.show}/>
                    </div>
                </div>
            </div>
        </div>


    </header>
                <div className="row">
                    <div className="col-12 col-md-3 activities">
                        <img src="https://www.bluehaven.com/wp-content/gallery/blue-haven-inground-pool-4.jpg"/>
                    </div>
                    <div className="col-12 col-md-3 activities">
                    <img src="https://www.bluehaven.com/wp-content/gallery/blue-haven-inground-pool-4.jpg"/>

                    </div>
                    <div className="col-12 col-md-3 activities">
                    <img src="https://www.bluehaven.com/wp-content/gallery/blue-haven-inground-pool-4.jpg"/>
                    </div>


                </div>

            </div>

        );
    }
}

export default HomeComponent;