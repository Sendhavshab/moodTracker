import { State } from "../store";

  export const productLoadingSelecter = (state: State) => {

    return state.product.Loading 
   }

   export const ProductDataSelecter = (state: State) => {
    return state.product.Product
   }

