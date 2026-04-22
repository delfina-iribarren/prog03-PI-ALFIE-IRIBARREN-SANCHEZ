import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            termino: ''
        };
    }

    controlarCambios(e) {
        this.setState({ termino: e.target.value });
    }

    ejecutarBusqueda(e) {
        e.preventDefault();
        this.props.history.push('/resultados/' + this.state.termino);
    }

    render() {
        return (
            <form className="search-form" onSubmit={(e) => this.ejecutarBusqueda(e)}>
                <input type="text" name="searchData" placeholder="Buscar..." value={this.state.termino} onChange={(e) => this.controlarCambios(e)}/>
                <button type="submit" className="btn btn-success btn-sm">Buscar</button> 
            </form>
        );
    }
}

export default withRouter(Buscador);