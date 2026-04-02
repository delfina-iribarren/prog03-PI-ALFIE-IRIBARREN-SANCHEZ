import { Component } from "react";
import React from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


class Home extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        return(
            <React.Fragment>
                <div class="container">
        <h1>UdeSA Movies</h1>


            <Header/>


        <form class="search-form" action="results.html" method="get">
            <input type="text" class="" name="searchData" placeholder="Buscar..." value=""/>
            <button type="submit" class="btn btn-success btn-sm">Buscar</button>
        </form>

        <h2 class="alert alert-primary">Popular movies this week</h2>
        <section class="row cards" id="movies">
            <Card/>
            <Card/>
        </section>

        <h2 class="alert alert-primary">Movies now playing</h2>
        <section class="row cards" id="now-playing">

        </section>

    </div>

            <Footer/>
            </React.Fragment>
        )
    }


}
export default Home;