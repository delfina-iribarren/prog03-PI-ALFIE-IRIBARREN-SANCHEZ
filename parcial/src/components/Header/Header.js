import React, { Component } from "react";
import "./Header.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let cookiesUsuario = cookies.get('email');
        let logueado = (cookiesUsuario != undefined)

        return (
            <nav>
                <ul class="nav nav-tabs my-4">
                    <li class="nav-item">
                        <Link to="/"> Home </Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/peliculas"> Películas </Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/series"> Series </Link>
                    </li>
                    {
                        logueado ? <li class="nav-item">
                            <Link to="/favoritas"> Favoritas </Link>
                        </li> : <React.Fragment>
                            <li class="nav-item ml-auto">
                                <Link to="/registro"> Registro </Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/login"> Login </Link>
                            </li></React.Fragment>
                    }


                </ul>
            </nav>
        )
    }


}
export default Header;