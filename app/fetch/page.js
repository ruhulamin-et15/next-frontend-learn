"use client";
import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);
  return (
    <div>
      <h2>Product list</h2>
      {product &&
        product.map((item) => {
          return (
            <div key={item.id}>
              <p>Name: {item.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Fetch;
