import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
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
  handleLogin=(event)=>{
    // Prevent default behavior
    event.preventDefault();

    const data = new FormData(event.target);
    // Access FormData fields with `data.get(fieldName)`
    // For example, converting to upper case
    console.log(data.get("email"));

    // Do your Axios stuff here

  }
  
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
                    LOG IN <span className="fa fa-user-circle-o"></span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div>
          <Modal funk={true} isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle} cssModule={{'modal-title': 'w-100 text-center'}}>
              We are The Grasshooper
            </ModalHeader>
            <ModalBody>
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-10">
                  <form onSubmit={this.handleLogin}>
                    <div className="card rounded-3 text-black">
                      <div className="card-body">
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-control"
                            placeholder="Phone number or email address"
                          />
                          <label class="form-label" for="form2Example11">
                            Username
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            class="form-control"
                            placeholder="Password"
                          />
                          <label class="form-label" for="form2Example11">
                            Password
                          </label>
                        </div>
                        <div class="text-center pt-1 mb-5 pb-1">
                          <Button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 w-100" type="submit"
                          >
                            Log in
                          </Button>
                          <a class="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <a
                            type="button"
                            class="btn btn-outline-danger"
                            href="/registro"
                          >
                            Create new
                          </a>
                        </div>
                      </div>
                      <div class="col-md-12 d-flex align-items-center gradient-custom-2">
                        <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                          <h4 class="mb-4">We are more than just a company</h4>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
