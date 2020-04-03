import React, { Component } from "react";
import logo from "../imagens/logo.png";


export default class Login extends Component {
    render() {
        return (
            <form>
                <h3><img src={logo}/></h3>
                
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Digite seu email" />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="Digite sua senha" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                <br></br>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Lembrar de mim</label>
                    </div>
                </div>
            </form>
        );
    }
}