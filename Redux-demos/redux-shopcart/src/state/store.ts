import { createStore, applyMiddleware } from 'redux';
 
import reducers from './reducers/index'; // Assuming you have a root reducer
import { thunk } from 'redux-thunk';
 
export const store = createStore(
  //npm install @reduxjs/toolkit all installation
  //npm install @types/react to avoid the errors during runtime
  reducers,
  applyMiddleware(thunk)
)