// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

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
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Tablet</button>
      {loading && <p>Carregando...</p>}
      {!loading && data && <Product data={data} />}
    </div>
  );
};

export default App;
