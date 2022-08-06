import React, { Component } from "react";
import logo from "../assets/logo.jpeg";
import { Form, FormGroup, Label, Input, FormFeedback, FormText,Button } from 'reactstrap';


export class ReservasComponent extends Component {
    render() {
        return (
            <div className="container">
                <h1>Agende su visita</h1>
                <Form>
                    <FormGroup>
                        <div className="row">
                            <div className="col-3">
                                <Label for="exampleEmail">Email</Label>
                            </div>
                            <div className="col-9">
                                <Input />
                                <FormFeedback>You will not be able to see this</FormFeedback>
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="row">
                            <div className="col-3">
                                <Label for="exampleDatetime">Fecha</Label>
                            </div>
                            <div className="col-9">
                                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="row">
                            <div className="col-3">
                                <Label for="exampleEmail">Nombre</Label>
                            </div>
                            <div className="col-9">
                                <Input />
                                <FormFeedback>You will not be able to see this</FormFeedback>
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="row">
                            <div className="col-3">
                                <Label for="exampleEmail">Telefono</Label>
                            </div>
                            <div className="col-9">
                                <Input type="tel" />
                                <FormFeedback>You will not be able to see this</FormFeedback>
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        
                        <Label for="exampleSelect">Numero de personas</Label>
                        <div className="row">
                            <div className="col-12">
                            <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                            </div>
                        

                        </div>
                        
                    </FormGroup>
                    <FormGroup>
                        <div className="row">
                        <div className="col-6">
                        <Button type="submit" className="btn btn-warning">Agendar</Button>
                        </div>
                        <div className="col-6">
                        <Button type="submit" className="btn btn-primary">Cancelar</Button>
                        </div>
                    </div>
                    </FormGroup>
                    
                    
                </Form>
            </div>
        );
    }

}
export default ReservasComponent;