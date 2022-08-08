import React, { Component } from "react";
import logo from "../assets/logo.jpeg";
export class HomeComponent extends Component {
    render() {
        return (
            <div className="container" style={{
                backgroundImage:
                    "url('https://juragananime.id/gallery/wallpaper/20220709/wonderful-nature-background-hd-desktop-wallpapers-4k-hd,desktop-wallpaper-hd-nature-preview.webp')",height:"400px"
            }}>
                    <h2>BIENVENIDOS A THE GRASSHOOPER 2022</h2>
                    <h1>ES UN GUSTO CONOCERTE..!</h1>
                

            </div>

        );
    }
}

export default HomeComponent;