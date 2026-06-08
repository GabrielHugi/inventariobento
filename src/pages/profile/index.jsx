import React, { useState } from "react";
import profilePicture from "../../images/profile.png";
import "./index.css";
import "../shared/index.css";
import MainHeader from "../shared/MainHeader/index.jsx";
import MainFooter from "../shared/MainFooter/index.jsx";

function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const emailUsuario = "usuario@email.com";
  const senhaUsuario = "senha123456";

  return (
    <div className="Login">
      <MainHeader />

      <div className="Body">
        <div className="ProfileCard">
          <img
            src={profilePicture}
            alt="Foto de perfil"
            className="ProfileImage"
          />

          <h1>Perfil</h1>

          <div className="ProfileInfo">
            <div className="InfoRow">
              <span>Email</span>
              <input type="email" value={emailUsuario} readOnly />
            </div>

            <div className="InfoRow">
              <span>Senha</span>

              <div className="PasswordContainer">
                <input
                  type={mostrarSenha ? "text" : "password"}
                  value={senhaUsuario}
                  readOnly
                />

                <button
                  type="button"
                  className="ShowPasswordButton"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                >
                  {mostrarSenha ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>
          </div>

          <div className="ProfileActions">
            <button>Editar Perfil</button>
            <button>Trocar Senha</button>
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
}

export default Login;
