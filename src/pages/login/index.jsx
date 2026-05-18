import logo from "../../images/logo.png";
import "./index.css";
import "../shared/index.css";
import MainHeader from "../shared/MainHeader/index.jsx"
import MainFooter from "../shared/MainFooter/index.jsx";

function Login() {
  return (
    <div className="Login">
      <MainHeader/>
      
      <div className="Body">
        <div className="caixalogin">
          
          <div className="lado-esquerdo">
            <h1 className="titulo-estoque">Estoque</h1>
            <img src={logo} alt="Logo Bento Quirino" className="logo-bento" />
          </div>

          <form className="lado-direito" onSubmit={(e) => e.preventDefault()}>
            <div className="campo-input">
              <label>Email</label>
              <input type="email" required />
            </div>

            <div className="campo-input">
              <label>Senha</label>
              <input type="password" required />
            </div>

            <button type="submit" className="botao-enviar">Enviar</button>
          </form>

        </div>
      </div>
      
      <MainFooter/>
    </div>
  );
}

export default Login;
