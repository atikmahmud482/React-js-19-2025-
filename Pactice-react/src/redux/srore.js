import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    // Add other reducers here like cartReducer, userReducer, etc.
  },
});

export default store;
