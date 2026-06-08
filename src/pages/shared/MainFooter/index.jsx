import logo from "../../../images/logo.png";
import "./index.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MainFooter() {
  const navigate = useNavigate();

  return (
    <footer className="Footer">
      <div className="FooterSection FooterBrand">
        <img
          src={logo}
          alt="Logo"
          className="FooterLogo"
          onClick={() => navigate("/")}
        />

        <p>Sistema de Gerenciamento de Estoque</p>
      </div>

      <div className="FooterSection">
        <h3>Contato</h3>
        <a
          className="FooterLink"
          href="mailto:contato@empresa.com"
        >
          contato@empresa.com
        </a>
        <p>(11) 99999-9999</p>
      </div>

      <div className="FooterSection">
        <h3>Informações</h3>
        <Link className="FooterLink" to="/terms">
          Termos de Uso
        </Link>

        <Link className="FooterLink" to="/privacy">
          Política de Privacidade
        </Link>
      </div>

      <div className="FooterSection">
        <h3>Copyright</h3>
        <p>© 2026 Empresa.</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default MainFooter;