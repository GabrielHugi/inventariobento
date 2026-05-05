import logo from "../../../images/logo.png";
import "./index.css";
import "../index.css";

function MainHeader() {
  return (
    <>
      <header className="Header">
        <div style={{ width: "20%", textAlign: "center" }}>
          <img src={logo} alt="logo" className="Logo" />
        </div>
        <div style={{ width: "60%", textAlign: "center" }}>
          <h1>Inventario Bento Quirino</h1>
        </div>
        <div style={{ width: "20%" }}></div>
      </header>
    </>
  );
}

export default MainHeader;