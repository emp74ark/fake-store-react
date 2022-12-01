import { createContext } from "react";
import {AuthState, AuthContext, CartContext} from '../shared/interfaces';
import {cart} from '../services/cart.service';

export const authState: AuthState = {
  authenticated: false,
  token: ''
}

export const authContext = createContext<AuthContext>({
  state: authState,
  dispatch: () => {},
})

export const cartContext = createContext<CartContext>({
  state: cart,
  dispatch: () => {},
});