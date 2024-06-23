import { createStore, combineReducers } from "redux";
import { sadReducer } from "./reducers/SadReducer";
import {
  happyReducer,
} from "./reducers/HappyReducer";
import { ProductReducer } from "./reducers/Product";

export type Moments = {
  intensity: number;
  time: string;
};




const reducer = combineReducers({
  sad: sadReducer,
  happy: happyReducer,
  product : ProductReducer
});

export type State = ReturnType<typeof reducer>


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
