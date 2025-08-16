// src/redux/slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { loadSession, saveSession, clearSession } from "../../services/authService";

const initialState = {
  user: loadSession(), // hidratar sesión si existía
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload; // { name, lastName, phone, email }
      saveSession(state.user);
    },
    register(state, action) {
      state.user = action.payload;
      saveSession(state.user);
    },
    logout(state) {
      state.user = null;
      clearSession();
    },
  },
});

export const { login, register, logout } = userSlice.actions;
export default userSlice.reducer;
