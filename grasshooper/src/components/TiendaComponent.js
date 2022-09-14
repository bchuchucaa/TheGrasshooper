import axios from "axios";
import { Component } from "react";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, Input } from "reactstrap";
import '../styles/TiendaStyle.css';

export class TiendaComponent extends Component {
    state = {
        products:[]
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(res => {
            const products =  res.data;
            this.setState({products});
        })
    }
    render() {
        return (
            <div className="">

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
                            
                            <div className="productos">
                            { this.state.products.map(product =>   
                            <Card className="productCard">
                                    <CardBody>
                                        <CardText>{product.title}</CardText>
                                        <CardImg src={product.image}/>
                                    </CardBody>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">{product.price}</CardSubtitle>
                                    <Button className="btn-warning">Add to card</Button>
 
                                </Card>
                            
                            )}
                              
                                
                            </div>
                           
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}
export default TiendaComponent;