import { UnknownAction } from "redux";
import { Moments } from "../store";
import { SAD } from "../actions/momentsAction";
import { produce } from "immer";

export type SadState = {
  sadMoments: Moments[];
};
export const initialSadState = {
  sadMoments: [],
};

export const sadReducer = (
  state: SadState = initialSadState,
  action: UnknownAction
) => {
  switch (action.type) {
    case SAD:
      return produce(state, (draft) => {
        draft.sadMoments.push(<Moments>action.payload);
      });

    default:
      return state;
  }
};
