import { UnknownAction, createStore } from "redux";
import { HAPPY, SAD } from "./action";

export type Moments = {
  intentsity: number;
  time: string;
};

export type State = {
  sadMoments: Moments[];
  happyMoments: Moments[];
};

const initialState: State = {
  sadMoments: [],
  happyMoments: [],
};

const reducer = (state: State = initialState, action: UnknownAction): State => {
  switch (action.type) {
    case HAPPY:
      return {
        ...state,
        happyMoments: [...state.happyMoments, <Moments>action.payload],
      };
    case SAD:
      return {
        ...state,
        sadMoments: [...state.sadMoments, <Moments>action.payload],
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
