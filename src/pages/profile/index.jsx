import React, { useState } from "react";
import profilePicture from "../../images/profile.png";
import "./index.css";
import "../shared/index.css";
import MainHeader from "../shared/MainHeader/index.jsx"
import MainFooter from "../shared/MainFooter/index.jsx";

function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const emailUsuario = "usuario@email.com";
  const senhaUsuario = "senha123456";

  return (
    <div className="Login">
      <MainHeader/>
      
      <div className="Body">
        <div className="caixalogin">
          
          <div className="lado-esquerdo">
            <h1 className="titulo-estoque">Perfil</h1>
            <img src={profilePicture} alt="Foto de perfil" className="logo-bento" />
          </div>

          <form className="lado-direito" onSubmit={(e) => e.preventDefault()}>
            <div className="campo-input">
              <label>Email:</label>
              <input type="email" value={emailUsuario} readOnly />
            </div>

            <div className="campo-input">
              <label>Senha:</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type={mostrarSenha ? "text" : "password"} 
                  value={senhaUsuario} 
                  readOnly 
                />
                <button 
                  type="button" 
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
                  title={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                >
                  {mostrarSenha ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
      
      <MainFooter/>
    </div>
  );
}

export default Login;