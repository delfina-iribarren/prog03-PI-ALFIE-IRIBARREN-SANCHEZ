import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Login extends Component {
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
        console.log(cookieUsuario);
        if (cookieUsuario != undefined) {
            //redireccionar a home
            this.props.history.push("/");
        }
    }

    controlarCambios(e, campo) {

        if (campo == "email") {
            this.setState({ email: e.target.value }, () => console.log(this.state))
        }

        if (campo == "password") {
            this.setState({ password: e.target.value }, () => console.log(this.state))
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


            const storage = JSON.parse(localStorage.getItem("usuarios"));
            if (storage !== null) {
                const usuarioLocal = storage.filter((usuario) => usuario.email === email)
                if (usuarioLocal.length === 0) {
                    this.setState({ error: "No hay una cuenta con este mail" });
                }

                else {
                    if (usuarioLocal[0].password == password) {
                        cookies.set("email", email);
                        //redireccionar a home
                        this.props.history.push("/");
                    }
                    else{
                        this.setState({ error: "Contraseña incorrecta" });
                    }
                }

            }
            else {
                this.setState({ error: "No hay una cuenta con este mail" });

            }
        }
    }

    render() {
        return (
            <div>
                <h2 class="alert alert-primary">Login</h2>
                <h2>Iniciar sesión</h2>
                <form>
                    <label for="email">Email</label>
                    <input type="email" onChange={((e) => this.controlarCambios(e, "email"))} />
                    <label for="password">Contraseña</label>
                    <input type="password" onChange={((e) => this.controlarCambios(e, "password"))} />
                    <button onClick={((e) => this.onSubmit(e))}> Iniciar sesión </button>
                    {
                        this.state.error != "" ? <p>{this.state.error}</p> : ""
                    }
                    <p className="mt-3 text-center">¿No tenes cuenta? <Link to="/registro"> Registrate </Link></p>
                </form>
            </div>
        )
    }
}
export default Login;    