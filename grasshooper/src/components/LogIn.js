import React, { useState, useContext } from "react";
import AuthContext from "../services/AuthContext";
import { Button } from "reactstrap";

import Api from "../services/Api";
export default function LogIn() {
  const LOGIN_URL = "/Usuario/login";
  const { setAuth } = useContext(AuthContext);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [success, setSuccess] = useState(0);
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("handling loigin");
    try {
      console.log('tryenja')
      const response = await Api.post(
        LOGIN_URL,
        JSON.stringify({
          us_usuario: usuario,
          us_password: password,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const rol = "user";
      setAuth({ usuario, password, rol });
      setUsuario("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMessage("No server response");
      } else if (err.response?.status === 400) {
        setErrMessage("Revisa el email y el password");
      } else if (err.response?.status === 401) {
        setErrMessage("Acceso no autorizado");
      } else {
        setErrMessage("Login Failed");
        console.log(err)
      }
    }
  };
  return (
    <div className="card">
      <h5 class="card-header text-bg-light">Inicia sesion</h5>
      <p>{errMessage}</p>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <form onSubmit={handleLogin}>
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
                    className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 w-100"
                    type="submit"
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
    </div>
  );
}
