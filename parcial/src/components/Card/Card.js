import { Component } from "react";
import "./Card.css"
import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            verDescripcion: false
        }
    }
    cambiarDescripcion(){
        this.setState({verDescripcion: !this.state.verDescripcion})
    }

    render(){
        console.log(this.props)
        return(
             <article class="single-card-movie">
                <img src={"https://image.tmdb.org/t/p/w500"+this.props.data.poster_path} class="card-img-top"
                    alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    <button class="btn alert-primary" onClick = {() => this.cambiarDescripcion()}>{this.state.verDescripcion ? "Ocultar descripción" : "Ver descripción"}</button>
                    {this.state.verDescripcion ? <p class="card-text">{this.props.data.overview}</p> : ""}
                    <Link to= {`/detalle/${this.props.data.id}`} class="btn btn-primary">Ver más</Link>
                    <a href="" class="btn alert-primary">♥️</a>
                </div>
            </article>
        )
    }


}
export default Card;