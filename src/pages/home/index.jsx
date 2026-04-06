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
      <div className="Body">
        <p>conteúdo da página/app/site</p>
      </div>
      <footer className='Footer'>
        <h5>Todos os direitos reservados para nós os sigmas - ETEC BQ 2026 - Devs: Hugi e JUCAGIO - coisas aleatorias pra encher o footer</h5>
      </footer>
    </div>
  );
}

export default Home;