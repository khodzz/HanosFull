import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user/user";
import favorites from "./reducers/favorites/favorites";
import products from "./reducers/products/products";

const store = configureStore({
  reducer: {
    user,
    favorites,
    products,
  },
});

export default store;
