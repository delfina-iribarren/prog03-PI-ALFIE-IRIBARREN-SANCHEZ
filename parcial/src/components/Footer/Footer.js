import { Component } from "react";
import "./Footer.css"

class Footer extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        return(
        <footer class="alert alert-primary mt-4 text-center">
            <p class="mb-0">Hannah Alfie | Delfina Iribarren | Magdalena Sánchez </p>
        </footer>
        )
    }


}
export default Footer;