import logo from "../../images/logo.png";
import "./index.css";
import "../shared/index.css";

function Home() {
  return (
    <div className="Home">
      <header className="Header">
        <div style={{ width: "20%", textAlign: "center" }}>
          <img src={logo} alt="logo" className="Logo" />
        </div>
        <div style={{ width: "60%", textAlign: "center" }}>
          <h1>Inventario Bento Quirino</h1>
        </div>
        <div style={{ width: "20%" }}></div>
      </header>
      <div className="Body">
        <div className="tela de login">
          Email:
          <form action="getform.php" method="get">
            Nome: <input type="text" name="nome" />
            <br />
            Sobrenome: <input type="text" name="sobrenome" />
            <br />
            E-mail: <input type="email" name="email_usuario" />
            <br />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
      <footer className="Footer">
        <h5>
          Todos os direitos reservados para nós os sigmas - ETEC BQ 2026 - Devs:
          Hugi e JUCAGIO - coisas aleatorias pra encher o footer
        </h5>
      </footer>
    </div>
  );
}

export default Home;
