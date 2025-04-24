// src/redux/menuSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the menu
const initialState = {
  isMenuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen; // Toggle the menu open state
    },
    closeMenu: (state) => {
      state.isMenuOpen = false; // Close the menu
    },
    openMenu: (state) => {
      state.isMenuOpen = true; // Open the menu
    },
  },
});

export const { toggleMenu, closeMenu, openMenu } = menuSlice.actions;
export default menuSlice.reducer;
