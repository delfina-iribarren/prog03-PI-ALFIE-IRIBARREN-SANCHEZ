import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            esFavorito: false,
            id: this.props.match.params.id
        }
    }

    agregarAFavoritos() {
        const storage = localStorage.getItem("favPeliculas");
        if (storage === null) {
            let array = [];
            array.push(this.state.id);
            const storageString = JSON.stringify(array);
            localStorage.setItem("favPeliculas", storageString);
        } else {
            const storageParseado = JSON.parse(storage);
            storageParseado.push(this.state.id);
            const storageString = JSON.stringify(storageParseado);
            localStorage.setItem("favPeliculas", storageString);
        }
        this.setState({ esFavorito: true });
    }

    sacarDeFavoritos() {
        const storage = localStorage.getItem("favPeliculas");
        const storageParseado = JSON.parse(storage);

        const storageFiltrado = storageParseado.filter(favId => favId !== this.state.id);

        const storageString = JSON.stringify(storageFiltrado);
        localStorage.setItem("favPeliculas", storageString);
        this.setState({ esFavorito: false });

    }

    componentDidMount() {
        const storage = localStorage.getItem("favPeliculas");
        if (storage != null) {
            const storageParseado = JSON.parse(storage);
            if (storageParseado.includes(this.state.id)) {
                this.setState({ esFavorito: true });
            }
        }
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1`)
            .then(res => res.json())
            .then(dataapi => {
                console.log(dataapi)
                this.setState({ data: dataapi });
            })
    }

    render() {
        let cookiesUsuario = cookies.get('email');
        let logueado = (cookiesUsuario != undefined)

        return (
            <React.Fragment>
                <Header /> 
                <img src={"https://image.tmdb.org/t/p/w500" + this.state.data.poster_path} />
                <h2>{this.state.data.title}</h2>
                <p>{this.state.data.vote_average}</p>
                <p>{this.state.data.release_date}</p>
                <p>{this.state.data.runtime}</p>
                <p>{this.state.data.overview}</p>
                {this.state.data.genres == undefined ? "" : this.state.data.genres.map(item => <p>{item.name}</p>)}
                {logueado?<div className="btn alert-primary" onClick={() => this.state.esFavorito ? this.sacarDeFavoritos() : this.agregarAFavoritos()}>{this.state.esFavorito ? '♥️' : '♡'}</div>:""}
                <Footer />
            </React.Fragment>

        )
    }


}
export default Detalle;