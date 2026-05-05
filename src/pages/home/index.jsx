import logo from "../../images/logo.png";
import "./index.css";
import "../shared/index.css";
import MainHeader from "../shared/MainHeader/index.jsx"
import MainFooter from "../shared/MainFooter/index.jsx";

function Home() {
  return (
    <div className="Home">
      <MainHeader/>
      <div className="Body">
        <h1>Ayo my sigmas!</h1>
      </div>
      <MainFooter/>
    </div>
  );
}

export default Home;
