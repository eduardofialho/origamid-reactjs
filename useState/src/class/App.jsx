import { useState } from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

function App() {
  // const activeHook = useState(false);
  // const activeValue = activeHook[0];
  // const refreshValue = activeHook[1];
  const [active, setActive] = useState(false);
  const [data, setData] = useState({ name: "Eduardo", age: "22" });

  const [modal, setModal] = useState(true);

  // const [modal, setModal] = useState(() => {
  //   const active = window.localStorage.getItem("active");
  //   return active;

  const [count, setCount] = useState(1);
  const [items, setItems] = useState(["Item 1"]);

  function handleClick() {
    // refreshValue(!activeValue);
    // setActive(!active);
    // setData({ ...data, college: "Has college." });

    setCount(count + 1);

    setItems([...items, "Item " + (count + 1)]);
  }

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{count}</button>

      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.college}</p>
      <button onClick={handleClick}>{active ? "Ativo" : "Inativo"}</button>

      <div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
      </div>
    </>
  );
}

export default App;
