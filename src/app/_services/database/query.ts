import database from ".";
import { auth } from "../auth";


export const getProducts = async () => {
  const session = await auth();
  const products = await database.product.findMany();
  return products;
};
