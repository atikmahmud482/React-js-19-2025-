// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice"; // Import the menuSlice reducer

const store = configureStore({
  reducer: {
    menu: menuReducer, // Add the menu reducer to the store
  },
});

export default store;
