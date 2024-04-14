import React from "react";

function Products() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 }
  ];

  return (
    <>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </>
  );
}

export default Products;
