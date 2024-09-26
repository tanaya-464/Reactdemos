import {Action,Dispatch} from"redux";
import {ActionType} from "../action-types"

export const depositMoney=(amount:number)=>{
  return (dispatch:Dispatch) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload:amount
    })
  }
}

export const withdrawMoney=(amount:number)=>{
  return (dispatch:Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload:amount
    })
  }
}

export const bankruptMoney=()=>{
  return (dispatch:Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
      
    })
  }
}