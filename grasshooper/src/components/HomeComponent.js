import React from "react";
import LogIn from "./LogIn";
import "../styles/HomeStyle.css";
import logo from "../assets/gant.png";
export function HomeComponent() {
  return (
    <div>
      <header class="jumbotron">
        <div>
          <div class="row row-header">
            <div class="col-12 col-md-6">
              <h1>The Grasshooper</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
              <div class="col-12 col--6 align-self-center">
                <img src={logo} class="img-fluid" height="10px" alt="logo" />
              </div>
            </div>
            <div class="col-11 col-md-5 align-self-center">
              <LogIn />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
