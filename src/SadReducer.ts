import { UnknownAction } from "redux";
import { Moments } from "./store";
import { SAD } from "./action";

export type SadState = {
  sadMoments: Moments[];
};
export const initialSadState = {
  sadMoments: [],
};

 export const sadReducer = (state: SadState, action: UnknownAction) => {
  switch (action.type) {
    case SAD:
      return {
        ...state,
        sadMoments: [...state.sadMoments, <Moments>action.payload],
      };

    default:
      return state;
  }
};
