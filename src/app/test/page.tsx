import React from "react";
import { getProducts } from "../_services/database/query";

const Test = async () => {
  const products = await getProducts();
  console.log(products);
  return <div>Product</div>;
};

export default Test;
