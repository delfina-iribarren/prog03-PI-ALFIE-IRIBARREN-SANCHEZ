import React, { Component } from "react";
import {useState, useEffect} from 'react';
import "./Header.css"
import { Link, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Header(props){
    const [encabezado, setHeader] = useState('')
    function desloguearHeader(){
        cookies.remove("email");
        setHeader("/");
    }

    let cookiesUsuario = cookies.get('email');
    let logueado = (cookiesUsuario != undefined)

    return(
        <nav>
                <ul className="nav nav-tabs my-4">
                    <li className="nav-item">
                        <Link to="/"> Home </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/peliculas/popular"> Películas populares </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/peliculas/now_playing"> Peliculas en cartelera </Link>
                    </li>
                    {
                        logueado ? 
                        <React.Fragment> 
                            <li className="nav-item">
                                <Link to="/favoritas"> Favoritas </Link>
                            </li>
                            <li onClick={() => desloguearHeader()} className="nav-item">
                               <Link to="/"> Cerrar sesión </Link> 
                            </li>
                        </React.Fragment>
                            : <React.Fragment>
                                <li className="nav-item ml-auto">
                                    <Link to="/registro"> Registro </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/login"> Login </Link>
                                </li></React.Fragment>
                    }
                </ul>
        </nav>
    )
}
export default withRouter(Header);