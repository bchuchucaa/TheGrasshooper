import { Component } from "react";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, Input } from "reactstrap";
import '../styles/TiendaStyle.css';

export class TiendaComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2 menu">
                        <div className="row">
                            <div className="col-5">Filtros</div>
                            <div className="col-5">Collapsar</div>
                        </div>
                        <Input placeholder="Ingrese su busqueda"></Input>

                        <div className="row divison">
                            <div className="col-3"><input type="checkbox"></input></div>
                            <div className="col-6"><h5>Woman</h5></div>
                        </div>
                        <div className="row divison">
                            <div className="col-3"><input type="checkbox"></input></div>
                            <div className="col-6"><h5>Man</h5></div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="row infoproductos">
                                <div className="col-2"><span className="fa fa-star-half-o">Nuevo</span></div>
                                <div className="col-3"><span className="fa fa-check-circle">Disponible</span></div>
                                <div className="col-3"><span className="fa fa-exclamation-circle">Agotado</span></div>
                            </div>
                            <div className="col-md-4">
                                <Card>
                                    <CardBody>
                                        <CardText>Camiseta redbull</CardText>
                                        <CardImg src="https://m.media-amazon.com/images/I/61RsJuvWBiL._AC_UX385_.jpg" />
                                    </CardBody>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">Precio: 6.99$</CardSubtitle>
                                    <Button className="btn-warning">Add to card</Button>
                                </Card>
                            </div>
                            <div className="col-md-4">
                                <Card>
                                    <CardBody>
                                        <CardText>Grasshooper</CardText>
                                        <CardImg src="https://m.media-amazon.com/images/I/A1KHvCGeH6L._CLa%7C2140%2C2000%7C81%2B4xYarFdL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX342_.png" />
                                    </CardBody>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">Precio: 6.99$</CardSubtitle>
                                    <Button className="btn-warning">Add to card</Button>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}
export default TiendaComponent;