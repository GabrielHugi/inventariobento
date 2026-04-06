import logo from '../../images/logo.png';
import './index.css';
import '../shared/index.css'

function Home() {
  return (
    <div className="Home">
      <header className="Header">
        <div style={{width: "20%", textAlign: "center"}}>
        <img src={logo} alt="logo" className="Logo" />
        </div>
        <div style={{width: "60%", textAlign: "center"}}>
        <h1>
          Inventario Bento Quirino
        </h1>
        </div>
        <div style={{width: "20%"}}>
        </div>
      </header>
    </div>
  );
}

export default Home;