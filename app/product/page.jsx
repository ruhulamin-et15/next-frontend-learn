import ProductButton from "./product";

const productList = async () => {
  let res = await fetch("https://dummyjson.com/products");
  let data = await res.json();
  return data.products;
};

const Product = async () => {
  const products = await productList();
  return (
    <div>
      <h2>Product list</h2>
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "2px solid black",
            marginBottom: "5px",
            padding: "10px",
          }}
        >
          <p>Name: {item.title}</p>
          <p>Price: {item.price}</p>
          <ProductButton id={item.id} />
        </div>
      ))}
    </div>
  );
};

export default Product;
