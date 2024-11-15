import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user/user";
import favorites from "./reducers/favorites/favorites";

const store = configureStore({
  reducer: {
    user,
    favorites,
  },
});

export default store;
