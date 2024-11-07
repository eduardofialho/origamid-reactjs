import Header from "./Header";
import Home from "./Home";
import Products from "./Products";

function App() {
  const { pathname } = window.location;

  return (
    <>
      <Header />
      {pathname == "/products" ? <Products /> : <Home />}
    </>
  );
}

export default App;
