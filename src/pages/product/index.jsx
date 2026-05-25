import "./index.css";
import "../shared/index.css";
import MainHeader from "../shared/MainHeader";
import MainFooter from "../shared/MainFooter";
import { useParams, useNavigate } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // FAKE DATABASE
  const products = [
    {
      id: 1,
      name: "Cadeira Gamer",
      description:
        "Cadeira bem skibidi sigma ohio rizz da marca ultra-super-duper-uper-looper",
      condition: "Novo, mas tem um pouco de mijo",
      location:
        "Sala 2, canto esquerdo, terceira cadeira da direita para a esquerda",
      images: ["🖼️", "🖼️", "🖼️", "🖼️", "🖼️", "🖼️"],
    },

    {
      id: 2,
      name: "Monitor",
      description: "Monitor 144hz muito pika",
      condition: "Usado",
      location: "Laboratório 3",
      images: ["🖼️", "🖼️", "🖼️"],
    },

    {
      id: 3,
      name: "Teclado",
      description: "Teclado mecânico barulhento pra caralho",
      condition: "Semi novo",
      location: "Sala 1",
      images: ["🖼️", "🖼️"],
    },
  ];

  // GET PRODUCT BY ID
  const product = products.find((p) => p.id === Number(id));

  // NOT FOUND
  if (!product) {
    return (
      <div>
        <MainHeader />
        <h1>Produto não encontrado</h1>
        <MainFooter />
      </div>
    );
  }

  // RELATED PRODUCTS
  const relatedProducts = products.filter((p) => p.id !== product.id);

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
            Reporte mudança
            <br />
            ou problema
          </button>
        </div>

        {/* CENTER */}
        <div className="CenterSection">
          <h1 className="ProductTitle">{product.name}</h1>

          <div className="TopInfo">
            <div className="InfoBox DescriptionBox">
              <h3>Descrição</h3>
              <p>{product.description}</p>
            </div>

            <div className="InfoBox ConditionBox">
              <h3>Condição</h3>
              <p>{product.condition}</p>
            </div>
          </div>

          <div className="BottomInfo">
            <div className="InfoBox PhotosBox">
              <h3>Fotos adicionais</h3>

              <div className="ExtraPhotosGrid">
                {product.images.map((img, index) => (
                  <div key={index} className="SmallPhoto">
                    {img}
                  </div>
                ))}
              </div>
            </div>

            <div className="InfoBox LocationBox">
              <h3>Local</h3>

              <p>{product.location}</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="RightSection">
          <h2 className="RelatedTitle">Produtos relacionados</h2>

          {relatedProducts.map((related) => (
            <div
              className="RelatedCard"
              key={related.id}
              onClick={() => navigate(`/product/${related.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="RelatedImage">🖼️</div>

              <div className="RelatedInfo">
                <strong>{related.name}</strong>
                <p>{related.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MainFooter />
    </div>
  );
}

export default ProductPage;