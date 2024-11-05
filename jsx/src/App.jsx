import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  customer: "Luana",
  age: 27,
  purchases: [
    { name: "Notebook", price: "R$ 2500" },
    { name: "Geladeira", price: "R$ 3000" },
    { name: "Smartphone", price: "R$ 1500" },
  ],
  active: true,
};

const mario = {
  customer: "Mario",
  age: 31,
  purchases: [
    { name: "Notebook", price: "R$ 2500" },
    { name: "Geladeira", price: "R$ 3000" },
    { name: "Smartphone", price: "R$ 1500" },
    { name: "Guitarra", price: "R$ 3500" },
  ],
  active: false,
};

const App = () => {
  const data = mario;

  const total = data.purchases
    .map((item) => Number(item.price.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>Nome: {data.customer}</p>
      <p>Idade: {data.age}</p>
      <p>
        Situação:{" "}
        <span style={{ color: data.active ? "green" : "red" }}>
          {data.active ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito!</p>}
    </div>
  );
};

export default App;
