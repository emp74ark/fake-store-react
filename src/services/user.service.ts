import { http } from "./http.interceptor";
import { BASE_URL } from "./http.service.conf";
import { AuthResponse, User } from "../shared/interfaces";

function signup(user: User) {
    return http.post(`${BASE_URL}/users`, user)
  }

function signin(user: User) {
  return http.post<AuthResponse>(`${BASE_URL}/auth/login`, user);
}

function signout() {
  // this.authenticated = false;
}

function deleteUser(id: number) {
  return http.delete(`${BASE_URL}/users/${id}`)
}

function updateUser(id: number, user: User) {
  return http.patch(`${BASE_URL}/users/${id}`, user)
}

function userInfo(id: number) {
  return http<User>(`${BASE_URL}/users/${id}`)
}

export {signup, signin, signout, deleteUser, updateUser, userInfo}