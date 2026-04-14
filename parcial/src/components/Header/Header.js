import { Component } from "react";
import "./Header.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Header extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        return(
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

                <li class="nav-item">
                    <Link to="/favoritas"> Favoritas </Link>
                </li>

                <li class="nav-item ml-auto">
                    <Link to="/registro"> Registro </Link>
                </li>

                <li class="nav-item">
                    <Link to="/login"> Login </Link>
                </li>
            </ul>
        </nav>
        )
    }


}
export default Header;