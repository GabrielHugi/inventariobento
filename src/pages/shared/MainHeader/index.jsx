import logo from "../../../images/logo.png";
import defaultProfile from "../../../images/profile.png";
import "./index.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { Profiler } from "react";

function MainHeader() {
  const navigate = useNavigate();

  return (
    <>
      <header className="Header">
        <div className="LogoDiv" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="Logo" />
        </div>
        <div style={{ width: "60%", marginLeft: "3%" }}>
          <div className="Tabs">
            <button onClick={() => navigate("/products")}>
              <p>Produtos</p>
            </button>
          </div>
        </div>
        <div style={{ width: "8%", marginLeft: "5%", marginRight: "4%", height: "100%", display: "inline-flex", display: "flex", alignItems: "center" }}>
          <button onClick={() => navigate("/login")}>
            <p>Login</p>
          </button>
          <img src={defaultProfile} alt="logo" className="Profile" onClick={() => navigate("/profile")}></img>
        </div>
      </header>
    </>
  );
}

export default MainHeader;