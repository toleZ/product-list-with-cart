import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feactures/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
