import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user/user";
import products from "./reducers/products/products";
import CheckOutReducer from "./reducers/carts/CheckOutSlice";
import cartReducer from "./reducers/carts/CartSlice";
import { rememberEnhancer, rememberReducer } from "redux-remember";
import searchReducer from "./reducers/search/search";

const rememberedKeys = ["user", "products", "checkout"];

const store = configureStore({
  reducer: rememberReducer({
    user,
    products,
    checkout: CheckOutReducer,
    cart: cartReducer,
    search: searchReducer,
  }),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(
      rememberEnhancer(window.localStorage, rememberedKeys)
    ),
});

export default store;
