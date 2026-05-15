import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./Buscador.css"
import{useState} from "react";

function Buscador(props){
    const[termino, setTermino] = useState("")
    const[tipo, setTipo] = useState("")
    const [busqueda, setBusqueda] = useState("")
    
    function controlarCambios(e){
        setTermino(e.target.value) 
    }
    function controlarTipo(e){
        setTipo(e.target.value)
    }
    function ejecutarBusqueda(){
        setBusqueda('/resultados/' + setTermino + "/" + setTipo)
    }
    return(
            <form className="search-form" onSubmit={(e) => setBusqueda(e)}>
                <input type="text" name="searchData" placeholder="Buscar..." value={setTermino} onChange={(e) => setTermino(e)}/>
                <select onChange={(e) => setTipo(e)}>
                    <option value="movie">Pelicula</option>
                    <option value="tv">Serie</option>
                </select>

                <button type="submit" className="btn btn-success btn-sm">Buscar</button> 
            </form>
    )
}

export default withRouter(Buscador);