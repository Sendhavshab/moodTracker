import { UnknownAction } from "redux";
import { Moments } from "../store";
import { HAPPY } from "../actions/momentsAction";
import { produce } from "immer";

export type HappyState = {
  happyMoments: Moments[];
};
export const initialHappyState = {
  happyMoments: [],
};

export const happyReducer = (
  state: HappyState = initialHappyState,
  action: UnknownAction
) => {
  switch (action.type) {
    case HAPPY:
      return produce(state, (draft) => {
        draft.happyMoments.push(<Moments>action.payload);
      });

    default:
      return state;
  }
};
