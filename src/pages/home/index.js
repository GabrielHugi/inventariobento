import logo from './logo.svg';
import './index.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Ayo doctor here's another proper track
        </p>
      </header>
    </div>
  );
}

export default Home;