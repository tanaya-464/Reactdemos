import {Action,Dispatch} from"redux";
import {ActionType} from "../action-types"

export const AddProductAction=(amount:number)=>{
  return (dispatch:Dispatch) => {
    dispatch({
      type: ActionType.ADD,
      payload:amount
    })
  }
}

export const RemoveProductAction=(amount:number)=>{
  return (dispatch:Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE,
      payload:amount
    })
  }
}

