import { useEffect, useState } from "react";
import Product from "./Product";

const App = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Ocorre ao renderizar e ao atualizar");
  });

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

// const App = () => {
//   const [active, setActive] = useState(false);
//   // const [count, setCount] = useState(0);
//   // const [data, setData] = useState(null);

//   // useEffect(() => {
//   //   console.log("Executed.");
//   // }, []);

//   // useEffect(() => {
//   //   document.title = `Clicked ${count} times...`;
//   // }, [count]);

//   // useEffect(() => {
//   //   fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
//   //     .then((response) => response.json())
//   //     .then((result) => setData(result));
//   // }, []);

//   return (
//     <>
//       {active && <Product />}
//       <button onClick={() => setActive(!active)}>Ativar</button>
//     </>

//     // <>
//     //   {data && (
//     //     <div>
//     //       <h1>{data.nome}</h1>
//     //       <p>{data.preco * count}</p>
//     //     </div>
//     //   )}
//     //   <button onClick={() => setCount(count + 1)}>{count}</button>
//     // </>
//   );
// };

export default App;
