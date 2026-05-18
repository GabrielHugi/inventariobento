import logo from "../../../images/logo.png";
import "./index.css";
import "../index.css";
import { useNavigate } from "react-router-dom";

function MainHeader() {
  const navigate = useNavigate();

  return (
    <>
      <header className="Header">
        <div className="LogoDiv" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="Logo" />
        </div>
        <div style={{ width: "60%", marginLeft: "5%" }}>
          <div className="Tabs">
            <button onClick={() => navigate("/products")}>
              <p>Produtos</p>
            </button>
          </div>
        </div>
        <div style={{ width: "10%", marginLeft: "5%" }}>
          <div className="Tabs">
            <button onClick={() => navigate("/products")}>
              <p>Login</p>
            </button>
            <img></img>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainHeader;