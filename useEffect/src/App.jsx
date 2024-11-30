// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import { useState } from "react";
import Product from "./Product";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const result = await response.json();
    setData(result);
    setLoading(false);
  }

  return (
    <div>
      <h1>Preferência</h1>
      <button onClick={handleClick} style={{ margin: "0 1.5rem 0 0" }}>
        Notebook
      </button>
      <button onClick={handleClick}>Smartphone</button>

      {loading && <p>Carregando...</p>}
      {!loading && data && <Product data={data} />}
    </div>
  );
};

export default App;
