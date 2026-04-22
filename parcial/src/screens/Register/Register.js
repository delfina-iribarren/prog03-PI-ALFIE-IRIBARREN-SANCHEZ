import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";



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
                document.cookie = `session=${email}; path=/`;
                //redireccionar a login
                this.props.history.push("/login");
                }
                else{
                    this.setState({error: "Ya hay una cuenta con ese email"});
                }
            }
            else{
                localStorage.setItem("usuarios", JSON.stringify([nuevoUsuario]));
                document.cookie = `session=${email}; path=/`;
                //redireccionar a login
                this.props.history.push("/login");
            }
        }


    render(){
        const{email, password, error} = this.state;
        return(
            <div>
                <h2 class="alert alert-primary">Registro</h2>
                <h2>Crear cuenta</h2> 
                <form>
                    <label for="email">Email</label>
                    <input onChange={((e)=> this.controlarCambios(e, "email"))}/>
                    <label for="password">Contraseña</label>
                    <input onChange={((e)=> this.controlarCambios(e, "password"))}/>
                    <button onClick={((e)=> this.onSubmit(e))}> Registrarse </button>
                    <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to="/login"> Iniciar sesión </Link></p>
                </form>
            </div> 
        )
    }
}
export default Register;    