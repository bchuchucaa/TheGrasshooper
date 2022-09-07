import React, { Component } from "react";
import Header from "./headerComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import ReservasComponent from "./ReservasComponent";
import ActividadesComponent from "./ActividadesComponent";
import TiendaComponent from "./TiendaComponent";
import MapaComponent from "./MapaComponent";
import ContactoComponent from "./ContactoComponent";
import {Routes,Route,Navigate} from 'react-router-dom';
import RegistroComponent from "./RegistroComponent";

class MainComponent extends Component {
    render() {
       
        
        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route exact path="/reservas" element={<ReservasComponent/>}/>
                    <Route exact path="/actividades" element={<ActividadesComponent/>}/>
                    <Route exact path="/tienda" element={<TiendaComponent/>}/>
                    <Route exact path="/mapa" element={<MapaComponent/>}/>
                    <Route exact path="/contacto" element={<ContactoComponent/>}/>
                    <Route exact path="/registro" element={<RegistroComponent/>}/>
                    <Route path="/" element={<Navigate replace to="/home" />} />

                </Routes>

                <Footer />





            </div>

        );
    }

}
export default MainComponent;