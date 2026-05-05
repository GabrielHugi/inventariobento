import logo from "../../../images/logo.png";
import "./index.css";
import "../index.css";

function MainHeader() {
  return (
    <>
      <header className="Header">
        <div style={{ width: "18%", textAlign: "center" }}>
          <img src={logo} alt="logo" className="Logo" />
        </div>
        <div style={{ width: "82%" }}>
          <div className="Tabs">
            <div>
              <p>Produtos</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainHeader;