import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { RootState } from "../store";
import { setOrders } from "../store/orderSlice";

const OrderList: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.orders);

  useEffect(() => {
    axios.get("/orders").then((response) => {
      dispatch(setOrders(response.data)); // Dispatch action to set orders in Redux state
    });
  }, [dispatch]);

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;