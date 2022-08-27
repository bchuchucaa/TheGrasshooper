import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from "reactstrap";

const Reservaciones = () => {
    const [reservations,setReservaciones]=useState([]);
    useEffect(() => {
        fetch("http://192.168.0.107:8080/Resthooper/Agenda")
            .then(res => res.json())
            .then((data) => {
                console.log(data[0]);
                
                setReservaciones(data);
            });
    }, []);
    return (<div>

        {reservations ? (
            <div>
                
                {reservations.map((reservacion)=><h2 key={reservacion.ag_id}>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            {reservacion.ag_nombre}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            <i className="fa fa-calendar"></i>{reservacion.ag_fecha}
                        </CardSubtitle>
                        <CardText>
                            <i className="fa fa-user"></i> {reservacion.ag_personas}
                        </CardText>
                        <CardLink>
                            <i className="fa fa-phone"></i>{reservacion.ag_telefono}

                        </CardLink>
                    </CardBody>
                </Card>

                
                    
                    
                    {reservacion.ag_nombre}</h2>)
                    }
                </div>


        ) : <h1>LOAGIN</h1>
        }
    </div>)
}







export default Reservaciones;