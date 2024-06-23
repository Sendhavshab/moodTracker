import { ActionCreater } from ".";
import { Product } from "../moduls/Product";

export const LOADPRODUCT = "loadProduct";

export const loadProductAction: ActionCreater = () => ({
  type: LOADPRODUCT,
});

export const PRODUCTLOADED = "PRODUCTLOADED";

export const productLoadedAction: ActionCreater<Product> = (Products) => ({
  type: PRODUCTLOADED,
  payload : Products

});