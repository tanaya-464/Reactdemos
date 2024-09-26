import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState=0;
const reducer =(state:number =initialState,action:Action)=>{
  switch(action.type){
    case ActionType.ADD:
      return state +action.payload;
    case ActionType.REMOVE:
      return state -action.payload;
    default:return state;
  }
}

export default reducer;