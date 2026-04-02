import { Component } from "react";
import "./Card.css"

class Card extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        console.log(this.props)
        return(
             <article class="single-card-movie">
                <img src={"https://image.tmdb.org/t/p/w500"+this.props.data.poster_path} class="card-img-top"
                    alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    <p class="card-text">{this.props.data.overview}</p>
                    <a href="movie.html" class="btn btn-primary">Ver más</a>
                    <a href="" class="btn alert-primary">♥️</a>
                </div>
            </article>
        )
    }


}
export default Card;