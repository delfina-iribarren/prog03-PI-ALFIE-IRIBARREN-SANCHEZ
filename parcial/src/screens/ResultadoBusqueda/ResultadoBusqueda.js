import React, { Component } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const api_key = '90b45a60c2f1bb623a150a6f0011fbcb';

class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: []
        };
    }

    componentDidMount() {
        const termino = this.props.match.params.termino;
        this.buscar(termino);
    }

    componentDidUpdate(prevProps) {
        const terminoNuevo = this.props.match.params.termino;
        const terminoAnterior = prevProps.match.params.termino;

        terminoAnterior !== terminoAnterior && (() => this.buscar(terminoNuevo))();
    }

    buscar(termino) {
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${termino}&language=es-ES`)
        .then(response => response.json())
        .then(data => {
            this.setState({ resultados: data.results });
        })
        .catch(error => console.log(error));
    }

    render() {
        const termino = this.props.match.params.termino;
        const { resultados } = this.state;

        return (
            <div>
                <h1>UdeSA Movies</h1>
                <Header/>
                <h2> Resultados para: {termino} </h2>
                {resultados.length === 0 ? <p> Cargando...</p> : <div> {resultados.map((item, idx) => (<Card key={idx} data={item} /> ))}
                    </div>
                }
                <Footer/>
            </div>
        );
    }
}

export default ResultadoBusqueda;