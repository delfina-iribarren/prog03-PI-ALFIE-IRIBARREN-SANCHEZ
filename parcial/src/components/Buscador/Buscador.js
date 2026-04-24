import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            termino: '',
            tipo: 'movie'
        };
    }

    controlarCambios(e) {
        this.setState({ termino: e.target.value });
    }
    controlarTipo(e) {
        console.log(e.target.value)
        this.setState({tipo: e.target.value})
        console.log(this.state.tipo)
    }

    ejecutarBusqueda(e) {
        e.preventDefault();
        this.props.history.push('/resultados/' + this.state.termino + "/" + this.state.tipo);
    }

    render() {
        return (
            <form className="search-form" onSubmit={(e) => this.ejecutarBusqueda(e)}>
                <input type="text" name="searchData" placeholder="Buscar..." value={this.state.termino} onChange={(e) => this.controlarCambios(e)}/>
                <select onChange={(e) => this.controlarTipo(e)}>
                    <option value="movie">pelicula</option>
                    <option value="tv">serie</option>
                </select>

                <button type="submit" className="btn btn-success btn-sm">Buscar</button> 
            </form>
        );
    }
}

export default withRouter(Buscador);