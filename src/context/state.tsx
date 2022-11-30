import { createContext } from "react";
import { AuthState, AuthContext } from "../shared/interfaces";

export const authState: AuthState = {
  authenticated: false,
  token: ''
}

export const authContext = createContext<AuthContext>({
  state: authState,
  dispatch: () => {},
})