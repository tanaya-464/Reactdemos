import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import orderReducer from './orderSlice';

// Combine different slices (reducers) for users and orders.
const store = configureStore({
  reducer: {
    users: userReducer,
    orders: orderReducer,
  },
});

// Type definitions for store and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;