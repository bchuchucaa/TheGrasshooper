import { Component } from "react";
import chuchucafroy from "../assets/colaboradores/man.webp"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from "reactstrap";
export class ContactoComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3><i class="fa fa-users" aria-hidden="true"></i>COLABORADORES</h3>
                    </div>
                </div>

                <br></br>


                <div className="row">
                    <div className="col-4">
                        ...
                    </div>
                    <div className="col-8 ">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">
                                    SOCIO
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    FROILAN CHUCHUCA
                                </CardSubtitle>
                            </CardBody>
                            <div className="row">
                                <img
                                    alt="Card cap"
                                    src={chuchucafroy}
                                    width="20%" height="200px"
                                />

                            </div>

                            <CardBody>
                                <CardText>
                                    <address>White plains 34T NORTH AVENUE</address>
                                </CardText>
                                <CardText>
                                    chuchucafroy@grasshooper.ec
                                </CardText>
                                <CardLink href="https://wa.me/331882000022">
                                    <Button>LLAMAR</Button>
                                </CardLink>
                                <CardLink href="#">
                                    Another Link
                                </CardLink>
                            </CardBody>



                        </Card>

                    </div>

                </div>
                <br></br>
                <div className="row">
                    <div className="col-4">
                        ...
                    </div>
                    <div className="col-8 ">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">
                                    SOCIO
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    FROILAN CHUCHUCA
                                </CardSubtitle>
                            </CardBody>
                            <div className="row">
                                <img
                                    alt="Card cap"
                                    src={chuchucafroy}
                                    width="20%" height="200px"
                                />

                            </div>

                            <CardBody>
                                <CardText>
                                    <address>White plains 34T NORTH AVENUE</address>
                                </CardText>
                                <CardText>
                                    chuchucafroy@grasshooper.ec
                                </CardText>
                                <CardLink href="https://wa.me/331882000022">
                                    <Button>LLAMAR</Button>
                                </CardLink>
                                <CardLink href="#">
                                    Another Link
                                </CardLink>
                            </CardBody>



                        </Card>

                    </div>

                </div>

            </div>

        );
    }


}
export default ContactoComponent;