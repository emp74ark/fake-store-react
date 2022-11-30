import { FC, useReducer } from "react";
import { Children } from "../shared/interfaces";
import { authReducer } from "./reducer";
import { authContext, authState } from "./state";

export const AuthContextProvider: FC<Children> = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, authState);
  return <authContext.Provider value={{state, dispatch}}>{children}</authContext.Provider>
}