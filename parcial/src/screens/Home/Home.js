import { Component } from "react";
import React from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Buscador from "../../components/Buscador/Buscador";
import Register from "../Register/Register";
import Cookies from "universal-cookie";
import "./Home.css"

const cookies = new Cookies();

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            pelispopulares: [],
            peliscartelera: [],
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1")
            .then(res => res.json())
            .then(data => {
                this.setState({pelispopulares:data.results.slice(0,5)})
            })

        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1")
            .then(res => res.json())
            .then(data => {
                this.setState({peliscartelera:data.results.slice(0,5)})
            })
    }



    render() {
        let cookiesUsuario = cookies.get('email');
        let logueado = (cookiesUsuario != undefined)
        return (
            <React.Fragment>
                <Header />
                <div class="container">
                    <h1>UdeSA Movies</h1>
                      
                    <Buscador />

                    <h2 class="alert alert-primary">Popular movies this week</h2>
                    <section class="row cards" id="movies">
                        {this.state.pelispopulares.length==0?<p>Cargando...</p>:this.state.pelispopulares.map((unapeli,idx)=><Card data={unapeli} key={idx} logueado={logueado }/>)}
                    </section>

                    <h2 class="alert alert-primary">Movies now playing</h2>
                    <section class="row cards" id="now-playing">
                      {this.state.peliscartelera.length==0?<p>Cargando...</p>:this.state.peliscartelera.map((unapeli,idx)=><Card data={unapeli} key={idx} logueado={logueado}/>)}
                    </section>

                </div>

                <Footer />
            </React.Fragment>
        )
    }


}
export default Home;