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
            busqueda: "",
            peliculasFilter: [],
            page: 2
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo}?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => {
                this.setState({peliculas:data.results})
            })

        .catch(e => console.error(e))
    }
//metodos:
    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo}?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=${this.state.page}`)
            .then(res => res.json())
            .then(data => {
                this.setState({peliculas:this.state.peliculas.concat(data.results),page:this.state.page + 1})
            })

        .catch(e => console.error(e))
    }

    escribir(e){
        this.setState({busqueda:e.target.value},()=> {
            let filtro = this.state.peliculas.filter(unapeli => unapeli.title.toLowerCase().includes(this.state.busqueda.toLowerCase()))
            this.setState({peliculasFilter:filtro})
        })
    }

    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <h1>UdeSA Movies</h1>


                    <Header />

                    <h2 class="alert alert-primary">Todas las películas {this.props.match.params.tipo=="popular"?"populares":"en cartelera"}</h2>
                    <form class="filter-form px-0 mb-3">
                        <input type="text" name="filter" id="" placeholder="Buscar dentro de la lista" value={this.state.busqueda}onChange={(e)=>this.escribir(e)}/>
                    </form>
                                                        
                    <section class="row cards" id="movies">
                        {
                        this.state.peliculas.length==0?<p>Cargando...</p>:
                        this.state.busqueda.length==0? this.state.peliculas.map((unapeli,idx)=><Card data={unapeli} key={idx}/>):
                        this.state.peliculasFilter.length!=0? this.state.peliculasFilter.map((unapeli,idx)=><Card data={unapeli} key={idx}/>):"No se encontraron resultados para esa busqueda"
                        }
                    </section>
                                                            {/* parentesis vacios antes de la => porque no recibe parametros  */}
                    <button class="btn btn-info" onClick={()=>this.cargarMas()}>Cargar más</button>

                </div>

                <Footer />
            </React.Fragment>
        )
    }


}
export default Peliculas;