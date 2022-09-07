import React, { Component, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import moment from "moment";

import Api from "../services/Api";
export default function RegistroComponent() {
  const USER_CREATE = "/Usuario/crear";
  const [us_nombre, setNombre] = useState(null);
  const [us_apellido, setApellido] = useState(null);
  const [us_usuario, setUsername] = useState(null);
  const [us_email, setEmail] = useState(null);
  const [us_password, setPassword] = useState(null);
  const [us_fecha_nacimiento, setFechaNacimiento] = useState("");
  const [us_genero, setGenero] = useState(null);
  const [us_rol, setRol] = useState("user");
  const [us_pregunta, setPregunta] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const onChangeDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setFechaNacimiento(newDate);
    console.log(newDate); //value picked from date picker
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !us_nombre &&
      !us_apellido &&
      !us_genero &&
      !us_fecha_nacimiento &&
      !us_email &&
      !us_password &&
      !us_usuario &&
      !us_pregunta
    ) {
      setErrMsg("UPS..parece que algunos campos estan vacios ...");
      return;
    }
    try {
      const response = await Api.post(
        USER_CREATE,
        JSON.stringify({
          us_nombre: us_nombre,
          us_apellido: us_apellido,
          us_genero: us_genero,
          us_fecha_nacimiento: us_fecha_nacimiento,
          us_email: us_email,
          us_usuario: us_usuario,
          us_password: us_password,
          us_rol: us_rol,
          us_pregunta: us_pregunta,
        }),
        { headers: { "Content-Type": "application/json" } }
      );
      setSuccess(true);
      setNombre(null);
      setApellido(null);
      setGenero(null);
      setPassword(null);
      setFechaNacimiento(null);
      setEmail(null);
      setUsername(null);
      setPregunta(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader pad="medium">Registrate</CardHeader>
              <p>{errMsg}</p>
              <CardBody pad="medium">
                <FormGroup>
                  <div className="row">
                    <div className="col-6">
                      <Label for="nombre">Nombre</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        placeholder="Ingresa tu nombre"
                        onChange={(e) => setNombre(e.target.value)}
                      ></Input>
                    </div>
                    <div className="col-6">
                      <Label for="apellido">Apellido</Label>
                      <Input
                        id="apellido"
                        name="apellido"
                        placeholder="Ingresa tu apellido"
                        onChange={(e) => setApellido(e.target.value)}
                      ></Input>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Ingresa tu nombre de usuario"
                    onChange={(e) => setUsername(e.target.value)}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Ingresa tu correo"
                    onChange={(e) => setEmail(e.target.value)}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Ingresa tu contrasena"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col className="col-6">
                      <Label for="us_fecha_nacimiento">
                        Fecha de nacimiento
                      </Label>
                      <Input
                        id="us_fecha_nacimiento"
                        name="us_fecha_nacimiento"
                        type="date"
                        onChange={(e) => {
                          onChangeDate(e);
                        }}
                      />
                    </Col>
                    <Col>
                      <Label for="us_genero">Genero</Label>
                      <Input
                        id="us_genero"
                        name="us_genero"
                        type="select"
                        onChange={(e) => {
                          setGenero(e.target.value);
                        }}
                      >
                        <option>M</option>
                        <option>F</option>
                        <option>O</option>
                      </Input>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Label for="us_pregunta">Palabra de seguridad</Label>
                  <Input
                    id="us_pregunta"
                    name="us_pregunta"
                    placeholder="Ingresa tu respuesta"
                    onChange={(e) => {
                      setPregunta(e.target.value);
                    }}
                  ></Input>
                </FormGroup>
              </CardBody>
              <CardFooter background="light-2">
                <Row>
                  <div className="col-6">
                    <Button type="submit" hoverIndicator className="bg-primary">
                      Registrar
                    </Button>
                  </div>
                  <div className="col-6">
                    <Button hoverIndicator className="bg-secondary">
                      Cancelar
                    </Button>
                  </div>
                </Row>
              </CardFooter>
            </Form>
          </Card>
          <br />
          <br />
          <br />
        </div>
        <div
          className="col-12 col-md-6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://beamian.com/wp-content/uploads/2020/08/Building_an_event_registration_strategy-scaled.jpg"
            width="120%"
            height="700px"
            alt="registration"
          />
        </div>
      </div>
    </div>
  );
}
