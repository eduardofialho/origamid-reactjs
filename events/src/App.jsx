import React from "react";

const App = () => {
  // function handleClick(event) {
  //   console.log(event);
  // }

  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener("scroll", handleScroll);

  // return <button onClick={handleClick}>Click</button>;

  return (
    <div style={{ height: "200vh" }}>
      <button onClick={(event) => alert(event.target.innerText)}>Click</button>
    </div>
  );
};

export default App;
