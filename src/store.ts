import { UnknownAction, createStore } from "redux";
import { SadState, initialSadState, sadReducer } from "./SadReducer";
import { HappyState, happyReducer, initialHappyState } from "./HappyReducer";
import { deleteReducer } from "./DeleteReducer";
import { DELETE } from "./action";

export type Moments = {
  intentsity: number;
  time: string;
};

export type State = {
  sad: SadState ,
  happy: HappyState,

};

const initialState: State = {
  sad: initialSadState,
  happy: initialHappyState
};

const reducer = (state: State = initialState, action: UnknownAction): State => {

  if(action.type === DELETE){
    const newState = deleteReducer(state, action);
    return newState;
  }

  return{
    sad: sadReducer(state.sad , action),
    happy: happyReducer(state.happy , action),

  }
 
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
