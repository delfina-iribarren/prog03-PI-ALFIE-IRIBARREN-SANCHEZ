import { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritos: [],
            hayFavoritos: true
        }
    }
    componentDidMount() {
        let cookieUsuario = cookies.get('email');
        if (cookieUsuario == undefined) {
            //redireccionar a home
            this.props.history.push("/");
        }

        
        const storage = localStorage.getItem("favPeliculas");
        if (storage !== null) {
            const storageParseado = JSON.parse(storage);
            if (storage != "[]") {

                let peliculas = [];
                storageParseado.map(unId => {
                    fetch(`https://api.themoviedb.org/3/movie/${unId}?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1`)
                        .then(res => res.json())
                        .then(data => {
                            peliculas.push(data);
                            this.setState({ favoritos: peliculas });
                        })
                })
            } else {
                this.setState({ hayFavoritos: false })

            }
        } else {
            this.setState({ hayFavoritos: false })

        }
    }


    render() {
        return (
            <div class="container">
                <h1>UdeSA Movies</h1>
                <Header />
                <h2 class="alert alert-primary">Películas favoritas</h2>
                <section className="row cards" id="movies">
                    {this.state.hayFavoritos ?
                        this.state.favoritos.length == 0 ? <p>Cargando...</p> : this.state.favoritos.map((unapeli, idx) => <Card data={unapeli} key={idx} />)
                        : "No tenes peliculas en favoritos"}
                </section>

                <Footer />
            </div>

        )
    }


}
export default Favoritos;