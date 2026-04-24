import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            error: ""
        };

    }

    componentDidMount() {
        let cookieUsuario = cookies.get('email');
        if (cookieUsuario != undefined) {
             
            this.props.history.push("/");
        }
    }

    controlarCambios(e, campo) {

        if (campo == "email") {
            this.setState({ email: e.target.value })
        }

        if (campo == "password") {
            this.setState({ password: e.target.value })
        }
    };

    onSubmit(e) {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        if (password.length < 6) {
            this.setState({
                error: "La contraseña debe tener al menos 6 caracteres"
            });

        } else if (!email.includes("@")) {
            this.setState({
                error: "El mail debe contener un arroba"
            });
        }
        else {

            const nuevoUsuario = { email: email, password: password };
            const storage = JSON.parse(localStorage.getItem("usuarios"));
            if (storage !== null) {
                const usuarioLocal = storage.filter((usuario) => usuario.email === email)
                if (usuarioLocal.length === 0) {
                    storage.push(nuevoUsuario);
                    localStorage.setItem("usuarios", JSON.stringify(storage));
                    cookies.set("email", email);
                     
                    this.props.history.push("/");
                }

                else {
                    this.setState({ error: "Ya hay una cuenta con ese email" });
                }

            }
            else {
                localStorage.setItem("usuarios", JSON.stringify([nuevoUsuario]));
                cookies.set("email", email);
            
                this.props.history.push("/");
            }
        }
    }

    render() {
        return (
            <div>
                <h2 class="alert alert-primary">Registro</h2>
                <h2>Crear cuenta</h2>
                <form>
                    <label for="email">Email</label>
                    <input type="email" onChange={((e) => this.controlarCambios(e, "email"))} />
                    <label for="password">Contraseña</label>
                    <input type="password" onChange={((e) => this.controlarCambios(e, "password"))} />
                    <button onClick={((e) => this.onSubmit(e))}> Registrarse </button>
                    {
                        this.state.error != "" ? <p>{this.state.error}</p> : ""
                    }
                    <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to="/login"> Iniciar sesión </Link></p>
                </form>
            </div>
        )
    }
}
export default Register;    