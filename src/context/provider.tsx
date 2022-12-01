import {FC, useReducer} from 'react';
import {Children} from '../shared/interfaces';
import {authReducer, cartReducer} from './reducer';
import {authContext, authState, cartContext} from './state';
import {cart} from '../services/cart.service';

export const AuthContextProvider: FC<Children> = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, authState);
  return <authContext.Provider value={{state, dispatch}}>{children}</authContext.Provider>
}

export const CartContextProvider: FC<Children> = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, cart);
  return <cartContext.Provider value={{state, dispatch}}>{children}</cartContext.Provider>
}