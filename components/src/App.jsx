import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form/Form";

const Test = () => {
  const active = false;
  if (active) {
    return <p>Test</p>;
  } else {
    return null;
  }
};

function App() {
  return (
    <React.Fragment>
      <Test />
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  );
}

export default App;
