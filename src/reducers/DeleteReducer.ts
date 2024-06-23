import { UnknownAction } from "redux";
import { DELETE } from "../actions/momentsAction";
import { State } from "../store";
import { initialSadState } from "./SadReducer";
import { initialHappyState } from "./HappyReducer";

export const deleteReducer = (state: State, action: UnknownAction) => {
  switch (action.type) {
    case DELETE:
      return {
        sad: initialSadState,
        happy: initialHappyState,
      };

    default:
      return state;
  }
};
