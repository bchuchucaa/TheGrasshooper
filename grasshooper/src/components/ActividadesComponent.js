import React, { Component } from "react";
import { Form } from "react-bootstrap";
import saltarinas from "../assets/activities/saltarinas.jpeg";
export class ActividadesComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 justify-content-center">
                        
                        
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-6">
                    <article>
                            <i>Piscinas para ti</i>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </article>
                        <article>
                            <i>Saltarinas para ti</i>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </article>
                        <div className="row">
                        <Form>
                            <div className="row">
                            <h3>Tienes alguna sugerencia ..? cuentanos</h3>
                            </div>
                            <div className="row">
                            <textarea></textarea>
                            </div>
                            <div className="row">
                            <button class="btn btn-success btn-sm btn-block"> Enviar <span className="fa fa-send"></span></button>
                            </div>
                        </Form>
                        </div>
                        
                    </div>
                    <div className="col-6">
                        <img src="https://i.gifer.com/YE1i.gif" height="300px" width="98%"/>
                        <img src={saltarinas} height="300px" width="98%"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default ActividadesComponent;