import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user/user";
import products from "./reducers/products/products";
// import carts from "./reducers/carts/carts";
import { rememberEnhancer, rememberReducer } from "redux-remember";

const rememberedKeys = ["user", "products", "carts"];

const store = configureStore({
  reducer: rememberReducer({
    user,
    products,
    // carts,
  }),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(
      rememberEnhancer(window.localStorage, rememberedKeys)
    ),
});

export default store;
