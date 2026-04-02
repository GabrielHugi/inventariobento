import logo from '../../images/logo.png';
import './index.css';
import '../shared/index.css'

function Home() {
  return (
    <div className="Home">
      <header className="Header">
        <img src={logo} alt="logo" />
        <h1>
          Inventario Bento Quirino
        </h1>
      </header>
    </div>
  );
}

export default Home;