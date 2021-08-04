import http from './http';
import jwtDecode from "jwt-decode";
import store from '../store';

setTimeout(() => {  
  http.setJWT(getJWT());
}, 1000);

export async function login(email, password) {
  const { data: token } = await http.post('/customers/login', { email, password });
  store.commit("setToken", token);
}

export function loginWithJWT(token) {
  store.commit("setToken", token);
}

export function logout() {
  store.commit("removeToken");
}

export function getCurrentUser() {
  try {
    const token = store.getters.token;
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}

export function getJWT() {
  return store.getters.token;
}

export default {
  login,
  loginWithJWT,
  logout,
  getCurrentUser,
  getJWT
};
