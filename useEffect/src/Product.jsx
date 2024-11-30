const Product = ({ data }) => {
  return (
    <div>
      <h1>{data.nome}</h1>
      <p>R$ {data.preco}</p>
      <img src={data.fotos[0].src} alt="" />
    </div>
  );
};

export default Product;
