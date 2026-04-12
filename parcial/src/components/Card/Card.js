import { Component } from "react";
import "./Card.css"
import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            verDescripcion: false, 
            esFavorito: false
        }
    }
    
    componentDidMount(){
        console.log("HOLA");
        const storage = localStorage.getItem("favPeliculas");
        if (storage != null) {
            const storageParseado = JSON.parse(storage);
            if (storageParseado.includes(this.props.data.id)){
                this.setState({esFavorito: true});
            }
        }
    }
    cambiarDescripcion(){
        this.setState({verDescripcion: !this.state.verDescripcion})
    }

    agregarAFavoritos() {
        const storage = localStorage.getItem("favPeliculas");
        if (storage === null) {
        const primerFav = this.props.data.id;
        let array = [];
        array.push(primerFav);
        const storageString = JSON.stringify(array); 
        localStorage.setItem("favPeliculas", storageString); 
        } else {
        const storageParseado = JSON.parse(storage);
        storageParseado.push(this.props.data.id); 
        const storageString = JSON.stringify(storageParseado);
        localStorage.setItem("favPeliculas", storageString);
        }
        this.setState({esFavorito: true});
    }

    sacarDeFavoritos(){
        const storage = localStorage.getItem("favPeliculas");
        const storageParseado = JSON.parse(storage);
  
        const storageFiltrado = storageParseado.filter(favId => favId !== this.props.data.id);
  
        const storageString = JSON.stringify(storageFiltrado);
        localStorage.setItem("favPeliculas", storageString);
        this.setState({esFavorito: false});

    }

    render(){
        return(
             <article className="single-card-movie">
                <img src={"https://image.tmdb.org/t/p/w500"+this.props.data.poster_path} className="card-img-top"
                    alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <button className="btn alert-primary" onClick = {() => this.cambiarDescripcion()}>{this.state.verDescripcion ? "Ocultar descripción" : "Ver descripción"}</button>
                    {this.state.verDescripcion ? <p className="card-text">{this.props.data.overview}</p> : ""}
                    <Link to= {`/detalle/${this.props.data.id}`} className="btn btn-primary">Ver más</Link>
                    <div className="btn alert-primary" onClick={() => this.state.esFavorito ? this.sacarDeFavoritos() : this.agregarAFavoritos()}>{this.state.esFavorito ? '♥️' : '♡'}</div>
                </div>
            </article>
        )
    }


}
export default Card;