import "./index.css";
import "../shared/index.css";
import MainHeader from "../shared/MainHeader";
import MainFooter from "../shared/MainFooter";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  return (
    <div className="ProductsPage">
      <MainHeader />

      <div className="ProductPageContainer">
        {/* LEFT SIDE */}
        <div className="LeftSection">
          <div className="MainImage">
            <div className="ImagePlaceholder">🖼️</div>
          </div>

          <button className="ReportButton">
            Reporte mudanças
          </button>
        </div>

        {/* CENTER */}
        <div className="CenterSection">
          <h1 className="ProductTitle">Adicionar produto</h1>

          <div className="TopInfo">
            <div className="InfoBox DescriptionBox">
              <h3>Descrição</h3>
              <p>bla bla bla bla</p>
            </div>

            <div className="InfoBox ConditionBox">
              <h3>Condição</h3>
              <p>bla bla bla</p>
            </div>
          </div>

          <div className="BottomInfo">
            <div className="InfoBox PhotosBox">
              <h3>Fotos adicionais</h3>

              <div className="ExtraPhotosGrid">
                <div className="SmallPhoto">🖼️</div>
                <div className="SmallPhoto">🖼️</div>
                <div className="SmallPhoto">🖼️</div>
              </div>
            </div>

            <div className="InfoBox LocationBox">
              <h3>Local</h3>

              <p>bla bla bla</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="RightSection">
          <h2 className="RelatedTitle">Produtos relacionados</h2>

          <div
            className="RelatedCard"
            onClick={() => navigate("/product/1")}
            style={{ cursor: "pointer" }}
          >
            <div className="RelatedImage">🖼️</div>

            <div className="RelatedInfo">
              <strong>iPhone 13</strong>
              <p>Celular semi novo</p>
            </div>
          </div>

          <div
            className="RelatedCard"
            onClick={() => navigate("/product/2")}
            style={{ cursor: "pointer" }}
          >
            <div className="RelatedImage">🖼️</div>

            <div className="RelatedInfo">
              <strong>Monitor LG</strong>
              <p>Monitor 144hz</p>
            </div>
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
}

export default Cadastro;