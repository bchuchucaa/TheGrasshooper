import React, { useState} from "react";
import { Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';
import Reservaciones from "./ReservacionesComponent";
import "../styles/ReservaStyle.css";


function ReservasComponent() {
    const [ag_fecha, setFecha] = useState("");
    const [ag_nombre, setNombre] = useState("");
    const [ag_telefono, setTelefono] = useState("");
    const [ag_personas, setPersonas] = useState("")
    const [mensaje, setMensaje] = useState("");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const raw = JSON.stringify({
                ag_fecha: ag_fecha,
                ag_nombre: ag_nombre,
                ag_telefono: ag_telefono,
                ag_personas: ag_personas
            });
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            const res = await fetch("http://localhost:8080/Resthooper/Agenda/agendar",
                requestOptions
            );

            if (res.status === 200) {
                setFecha("");
                setNombre("");
                setTelefono("");
                setPersonas("");
                setMensaje(" Felicitaciones...Se agendo correctamente tu visita!")
            } else {
                setMensaje("Ups... algo salio mal, intentalo de nuevo!");
            }
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div className="container">
            <div className="row" style={{margin:"10px"}}>
                <div className="col-md-2 eventos">
                    <h3>Eventos</h3>
                    <ul>
                        <li class="">
                            <div className="row">
                                <div className="col-2">12 OCT</div>
                                <div className="col-8">Open coffe</div>
                                <div className="col-2"><span className="fa fa-arrow-right"></span></div>
                            </div>
                        </li>
                        <li class="">
                            <div className="row">
                                <div className="col-2">12 OCT</div>
                                <div className="col-8">Open coffe</div>
                                <div className="col-2"><span className="fa fa-arrow-right"></span></div>
                            </div>
                        </li>
                        <li class="">
                            <div className="row">
                                <div className="col-2">12 OCT</div>
                                <div className="col-8">Open coffe</div>
                                <div className="col-2"><span className="fa fa-arrow-right"></span></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10">
                    <h1>Agende su visita</h1>
                    <div className="message">{mensaje ? <p>{mensaje}</p> : null}</div>

                    <Form onSubmit={handleSubmit}>
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
                                    <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" onChange={(e) => setFecha(e.target.value)} />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row">
                                <div className="col-3">
                                    <Label for="exampleEmail">Nombre</Label>
                                </div>
                                <div className="col-9">
                                    <Input onChange={(e) => setNombre(e.target.value)} />
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
                                    <Input type="tel" onChange={(e) => setTelefono(e.target.value)} />
                                    <FormFeedback>You will not be able to see this</FormFeedback>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>

                            <Label for="exampleSelect">Numero de personas</Label>
                            <div className="row justify-content-end">
                                <div className="col-9">
                                    <Input type="select" name="select" id="exampleSelect" onChange={(e) => setPersonas(e.target.value)}>
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
            </div>


            <Reservaciones />
        </div>
    );


}
export default ReservasComponent;