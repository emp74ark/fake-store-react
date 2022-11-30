import { Reducer } from "react";
import { AuthActions, AuthState } from "../shared/interfaces";

export const authReducer: Reducer<AuthState, AuthActions> = (state, action) => {
  switch (action.type) {
    case "auth":
      state = {...state, authenticated: action.payload as boolean};
      return state;
    case "token":
      localStorage.setItem('token', action.payload as string)
      state = {...state, token: action.payload as string};
      return state;
    default:
      throw new Error();
  }
}