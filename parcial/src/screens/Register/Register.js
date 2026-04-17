import {Component} from "react";

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            error: ""
        };
        
    }

    controlarCambios(e, campo){
            this.setState({ [campo]:e.target.value })
        };
    
    onSubmit(e){
        e.preventDefault();
        const {email, password} = this.state;
        if (password.length<6) {
            this.state({
                error: "la contraseña debe tener al menos 6 caracteres"
            });
        }
            const nuevoUsuario = {email, password};
            const storage = JSON.parse(localStorage.getItem("usuarios"));
        if (storage !== null) {
            const emailExiste = storage.filter((u) => u.emailExiste === email)
            if (emailExiste.length === 0){
                storage.push(nuevoUsuario);
                localStorage.setItem("usuarios", JSON.stringify(storage));
            
            }
        }
        }

    render(){
        <form>
                <label for="email">Email</label>
                <input onChange={((e)=> this.controlarCambios(e, "email"))}/>
                <label for="password">Contraseña</label>
                <input onChange={((e)=> this.controlarCambios(e, "password"))}/>
                <button onClick={((e)=> this.onSubmit(e))}> Registrarse </button>
        </form> 
    }
}

export default Register       