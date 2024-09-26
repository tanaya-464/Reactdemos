import { ActionType } from "../action-types";


interface AddProductAction{
  type :ActionType.ADD,
  payload:number
}

interface RemoveProductAction{
  type :ActionType.REMOVE,
  payload:number
}


export type Action = AddProductAction | RemoveProductAction;