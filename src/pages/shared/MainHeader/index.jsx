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
        <div style={{ width: "75%", marginLeft: "5%" }}>
          <div className="Tabs">
            <div className="Button" onClick={() => navigate("/products")}>
              <p>Produtos</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainHeader;