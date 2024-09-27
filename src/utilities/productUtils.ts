import storeItems from "../data/storeItems";
import { Product } from "../types/ProductTypes";

export const findProductById = (id: number): Product => {
  const product = storeItems.find((item) => item.id === id);
  if (!product) throw new Error("Product is not found!");

  return product;
};
