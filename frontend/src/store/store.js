import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user/user";
import favorites from "./reducers/favorites/favorites";
import products from "./reducers/products/products";
import { rememberEnhancer, rememberReducer } from "redux-remember";

const rememberedKeys = ["user", "favorites", "products"];

const store = configureStore({
  reducer: rememberReducer({
    user,
    favorites,
    products,
  }),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(
      rememberEnhancer(window.localStorage, rememberedKeys)
    ),
});

export default store;
