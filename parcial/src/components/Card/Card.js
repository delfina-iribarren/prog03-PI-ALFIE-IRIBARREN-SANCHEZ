import { Component } from "react";
import "./Card.css"

class Card extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        return(
             <article class="single-card-movie">
                <img src="https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg" class="card-img-top"
                    alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">F1</h5>
                    <p class="card-text">Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling
                        Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.</p>
                    <a href="movie.html" class="btn btn-primary">Ver más</a>
                    <a href="" class="btn alert-primary">♥️</a>
                </div>
            </article>
        )
    }


}
export default Card;