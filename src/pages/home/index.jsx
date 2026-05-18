import "./index.css";
import "../shared/index.css";
import MainHeader from "../shared/MainHeader";
import MainFooter from "../shared/MainFooter";

function Home() {
  const news = [
    {
      title: "Nova atualização disponível",
      text: "Confira as novas funcionalidades adicionadas ao sistema.",
    },
    {
      title: "Produtos em destaque",
      text: "Veja os itens mais procurados desta semana.",
    },
    {
      title: "Evento da comunidade",
      text: "Participe do evento online neste final de semana.",
    },
  ];

  const tutorials = [
    {
      title: "Como pesquisar produtos",
      text: "Aprenda a usar os filtros e ferramentas de pesquisa.",
    },
    {
      title: "Criando uma conta",
      text: "Passo a passo para configurar seu perfil.",
    },
    {
      title: "Salvando favoritos",
      text: "Organize os produtos que deseja acompanhar.",
    },
  ];

  const products = [
    { name: "Produto X", description: "Descrição rápida do produto." },
    { name: "Produto Y", description: "Descrição rápida do produto." },
    { name: "Produto Z", description: "Descrição rápida do produto." },
  ];

  return (
    <div className="Home">
      <MainHeader />

      <div className="Body Homepage">
        <div className="HomeContent">

          <div className="LeftColumn">

            <div className="Box">
              <div className="BoxHeader">
                <h2>Notícias</h2>
              </div>

              <div className="ScrollableContent">
                {news.map((item, i) => (
                  <div key={i} className="NewsCard">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="Box">
              <div className="BoxHeader">
                <h2>Tutoriais</h2>
              </div>

              <div className="ScrollableContent">
                {tutorials.map((item, i) => (
                  <div key={i} className="TutorialCard">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <button>
                      Abrir tutorial
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="Box ProductsBox">
            <div className="BoxHeader">
              <h2>Produtos relevantes</h2>
            </div>

            <div className="ScrollableContent">
              {products.map((prod, i) => (
                <div key={i} className="ProductCard">
                  <div className="ProductImage" />

                  <div className="ProductInfo">
                    <strong>{prod.name}</strong>
                    <p>{prod.description}</p>
                  </div>

                  <button>
                    Mais informações
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <MainFooter />
    </div>
  );
}

export default Home;