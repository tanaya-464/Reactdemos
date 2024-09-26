import { combineReducers } from "redux";
import shopreducer from "./shopreducer";

const reducers =combineReducers({
  shop:shopreducer
});

export default reducers;
export type State =ReturnType<typeof reducers>