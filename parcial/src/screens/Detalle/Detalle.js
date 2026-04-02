import { Component } from "react";


class Detalle extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        return(
            <h1>Detalle {this.props.match.params.id}</h1>
        )
    }


}
export default Detalle;