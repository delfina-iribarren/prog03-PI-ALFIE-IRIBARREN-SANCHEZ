import { Component } from "react";
import React from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Buscador from "../../components/Buscador/Buscador";
import Register from "../Register/Register";


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
                console.log(data.results)
                this.setState({pelispopulares:data.results.slice(0,5)})
            })

        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1")
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                this.setState({peliscartelera:data.results.slice(0,5)})
            })
        .catch(e => console.log(e))
    }



    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <h1>UdeSA Movies</h1>


                    <Header />
                    <Buscador />

                    <h2 className="alert alert-primary">Popular movies this week <Link to= "/peliculas/popular">Ver todas las peliculas populares</Link></h2>
                    <section className="row cards" id="movies">
                        {this.state.pelispopulares.length==0?<p>Cargando...</p>:this.state.pelispopulares.map((unapeli,idx)=><Card data={unapeli} key={idx}/>)}
                    </section>

                    <h2 className="alert alert-primary">Movies now playing <Link to= "/peliculas/now_playing">Ver todas las peliculas en cartelera</Link></h2>
                    <section className="row cards" id="now-playing">
                      {this.state.peliscartelera.length==0?<p>Cargando...</p>:this.state.peliscartelera.map((unapeli,idx)=><Card data={unapeli} key={idx}/>)}
                    </section>

                </div>

                <Footer />
            </React.Fragment>
        )
    }


}
export default Home;