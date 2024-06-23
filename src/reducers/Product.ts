import { UnknownAction } from "redux";
import {  } from "../actions/momentsAction";
import { produce } from "immer";
import { LOADPRODUCT, PRODUCTLOADED } from "../actions/Product";
import { Product } from "../moduls/Product";

export type State = {
    Product: Product[],
    Loading: boolean
};
export const initialState : State    = {
    Product: [],
    Loading: false,
};

  export  const ProductReducer = (
  state: State = initialState,
  action: UnknownAction
) => {
  switch (action.type) {
    case LOADPRODUCT:
      return produce(state, (draft) => {
        draft.Loading = true;
      });
    case PRODUCTLOADED:
      return produce(state, (draft) => {
        draft.Product = <Product[]>action.payload
        draft.Loading = false;
      });
    default:
      return state;
  }
};
