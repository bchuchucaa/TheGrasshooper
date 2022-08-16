import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from "reactstrap";

const Reservaciones = () => {
    const [reservation, setUser] = useState(null);
    useEffect(() => {
        fetch("http://192.168.0.108:8080/Resthooper/Agenda")
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                const reservacion_api = {
                    ag_id: data[0].ag_id,
                    ag_fecha: data[0].ag_fecha,
                    ag_nombre: data[0].ag_nombre,
                    ag_telefono: data[0].ag_telefono,
                    ag_personas: data[0].ag_personas
                }
                setUser(reservacion_api);
            });
    }, []);
    return (<div>

        {reservation ? (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            {reservation.ag_nombre}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            <i className="fa fa-calendar"></i>{reservation.ag_fecha}
                        </CardSubtitle>
                        <CardText>
                            <i className="fa fa-user"></i> {reservation.ag_personas}
                        </CardText>
                        <CardLink>
                            <i className="fa fa-phone"></i>{reservation.ag_telefono}

                        </CardLink>
                    </CardBody>
                </Card>

                <h1>id:{reservation.ag_id}</h1>
                <h1>fecha: {reservation.ag_fecha}</h1></div>


        ) : <h1>LOAGIN</h1>
        }
    </div>)
}







export default Reservaciones;