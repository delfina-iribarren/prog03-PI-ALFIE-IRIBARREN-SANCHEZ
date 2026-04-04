import { Component } from "react";
import React from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


class Peliculas extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            peliculas: [],
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo}?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                this.setState({peliculas:data.results})
            })

        .catch(e => console.log(e))
    }



    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <h1>UdeSA Movies</h1>


                    <Header />

                    <h2 class="alert alert-primary">Todas las películas {this.props.match.params.tipo?"populares":"en cartelera"}</h2>
                    <form class="filter-form px-0 mb-3" action="" method="get">
                        <input type="text" name="filter" id="" placeholder="Buscar dentro de la lista"/>
                    </form>
                    
                    <button class="btn btn-info">Cargar más</button>
                    <section class="row cards" id="movies">
                        {this.state.peliculas.length==0?<p>Cargando...</p>:this.state.peliculas.map((unapeli,idx)=><Card data={unapeli} key={idx}/>)}
                    </section>

                </div>

                <Footer />
            </React.Fragment>
        )
    }


}
export default Peliculas;