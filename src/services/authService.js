// src/services/authService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// ----------------------
// AUTH (register / login)
// ----------------------
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data; // { token, user? }
};

// ----------------------
// PASSWORD RESET
// ----------------------
export const requestPasswordReset = async (email) => {
  const response = await axios.post(`${API_URL}/forgot-password`, { email });

  // 🔑 Si backend devuelve resetLink, también sacamos el token
  const data = response.data;
  if (data.resetLink) {
    const url = new URL(data.resetLink);
    const token = url.searchParams.get("token");
    return { ...data, token };
  }

  return data; // { message }
};

export const resetPassword = async (token, newPassword) => {
  // 👈 debe coincidir con lo que espera el backend
  const response = await axios.post(`${API_URL}/reset-password`, {
    token,
    newPassword,
  });
  return response.data; // { message }
};

// ----------------------
// SESSION helpers
// ----------------------
const STORAGE_KEY = "userSession";

export const saveSession = (session) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
};

export const loadSession = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearSession = () => {
  localStorage.removeItem(STORAGE_KEY);
};
