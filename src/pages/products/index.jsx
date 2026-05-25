import "./index.css";
import "../shared/index.css";
import MainHeader from "../shared/MainHeader";
import MainFooter from "../shared/MainFooter";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const recentProducts = [
    { id: 1245, name: "Produto 1", description: "Descrição e etc etc etc etc etc etc etc" },
    { id: 23, name: "Produto 2", description: "Descrição e etc etc etc etc etc etc etc" },
    { id: 152, name: "Produto 3", description: "Descrição e etc etc etc etc etc etc etc" },
    { id: 251, name: "Produto 4", description: "Descrição e etc etc etc etc etc etc etc" },
  ];

  const searchResults = [
    { id: 1, name: "Produto A", description: "Descrição e etc etc etc etc etc etc etc" },
    { id: 2, name: "Produto B", description: "Descrição e etc etc etc etc etc etc etc" },
    { id: 3, name: "Produto C", description: "Descrição e etc etc etc etc etc etc etc" },
  ];

  return (
    <div className="Products">
      <MainHeader />
      <div className="Body">
        <div className="ProductsContent">
          {/* Left column */}
          <div className="Box RecentProducts">
            <h2>Produtos recém-adicionados</h2>
            {recentProducts.map((prod, i) => (
              <div key={i} className="ProductCard">
                <div className="ProductImage" />
                <div className="ProductInfo">
                  <strong>{prod.name}</strong>
                  <p>{prod.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="Box SearchBox">
            <h2>Pesquisa</h2>
            <input type="text" placeholder="Insira algo" className="SearchInput" />
            <h3>Resultados:</h3>
            {searchResults.map((prod, i) => (
              <div key={i} className="ProductCard SearchResult">
                <div className="ProductImage" />
                <div className="ProductInfo">
                  <strong>{prod.name}</strong>
                  <p>{prod.description}</p>
                </div>
                <button className="InfoButton" onClick={() => navigate(`/product/${prod.id}`)}>Mais informações</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default Products;