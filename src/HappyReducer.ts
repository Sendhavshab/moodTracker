import { UnknownAction } from "redux";
import { Moments } from "./store";
import { HAPPY } from "./action";

export type HappyState = {
     happyMoments: Moments[],
}
export const initialHappyState = {
    happyMoments : []
}


export const happyReducer = (state: HappyState, action: UnknownAction) => {
  switch (action.type) {
    case HAPPY:
      return {
        ...state,
        happyMoments: [...state.happyMoments, <Moments>action.payload],
      };

    default:
      return state;
  }
};