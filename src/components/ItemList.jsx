import React from "react";
import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
