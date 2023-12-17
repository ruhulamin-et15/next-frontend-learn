import Image from "next/image";

const productList = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
};
const SingleProduct = async ({ params }) => {
  const product = await productList(params.id);
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = product;
  return (
    <>
      <div
        style={{
          background: "green",
          padding: "10px",
          margin: "5px",
          height: "100vh",
        }}
      >
        <p>User ID: {id}</p>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>Discount: {discountPercentage}</p>
        <p>Rating: {rating}</p>
        <p>Stock: {stock}</p>
        <p>Brand: {brand}</p>
        <p>Category: {category}</p>
        <Image src={thumbnail} alt="r" width={300} height={300} />
      </div>
    </>
  );
};

export default SingleProduct;
