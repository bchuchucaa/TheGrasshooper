import React, { Component, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import LogIn from "./LogIn";
import "../styles/HomeStyle.css";
import logo from "../assets/gant.png";
export class HomeComponent extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <div>
        <header class="jumbotron">
          <div>
            <div class="row row-header">
              <div class="col-12 col-sm-6">
                <h1>The Grasshooper</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
              <div class="row col-sm-6">
                <div class="col-12 col-sm-6 align-self-center">
                  <img src={logo} class="img-fluid" height="30px" />
                </div>
                <div class="col-12 col-sm-6 align-self-center">
                  <Button color="danger" onClick={this.toggle}>
                    LOG IN
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="row">
          <div className="col-12 col-md-3 activities">
            <img src="https://www.bluehaven.com/wp-content/gallery/blue-haven-inground-pool-4.jpg" />
          </div>
          <div className="col-12 col-md-3 activities">
            <img src="https://www.bluehaven.com/wp-content/gallery/blue-haven-inground-pool-4.jpg" />
          </div>
          <div className="col-12 col-md-3 activities">
            <img src="https://www.bluehaven.com/wp-content/gallery/blue-haven-inground-pool-4.jpg" />
          </div>
        </div>

        <div>
          <Modal
        
            funk={true}
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader toggle={this.toggle}>Login data</ModalHeader>
            <ModalBody>
              <div className="row">
                <label for="username">Username</label>
                <div className="col-2">
                  <span className="fa fa-user"></span>
                </div>
                <div className="col-6">
                  <input type="text" id="username" name="username" />
                </div>
              </div>

              <div className="row">
                <label for="password">Password</label>
                <div className="col-2">
                  <span className="fa fa-exclamation-circle"></span>
                </div>
                <div className="col-6">
                  <input type="password" id="password" name="password" />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Iniciar Sesion
              </Button>{" "}
              <a
                className="btn btn-secondary"
                onClick={this.toggle}
                href="./registro"
              >
                Registro
              </a>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
