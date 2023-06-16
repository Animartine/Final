import React from "react";
import StoreItems from "../data/products.json";
import { Item } from "./Item";

export const ItemList = () => {
  return (
    <div className="items-list">
      {StoreItems.map((product, idx) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};