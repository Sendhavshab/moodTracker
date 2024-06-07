import {  UnknownAction, createStore } from "redux"
import { HAPPY, SAD } from "./action";

 export type State = {
    sadCount: number ,
    happyCount: number
 }

 const initialState : State = {

    sadCount: 0,
    happyCount: 0
 }

 const reducer = (
   state: State = initialState,
   action: UnknownAction
 ): State => {
   switch (action.type) {
     case HAPPY:
       return {
         ...state,
         happyCount: state.happyCount + (action.payload as number),
       };
     case SAD:
       return {
         ...state,
         sadCount: state.sadCount + (action.payload as number),
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
