import { createStore } from "redux";
import cartItems from "../cart-items";
import { reducerFunction } from "./reducer";
const initialState = {
  cart: cartItems,
  total: 10,
  amount: 20,
};

export const store = createStore(reducerFunction, initialState);
