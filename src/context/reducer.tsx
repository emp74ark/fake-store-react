import {Reducer} from 'react';
import {AuthActions, AuthState, CartActions} from '../shared/interfaces';
import {Cart} from '../shared/types';
import {addToCart, getAll, removeFromCart, updateInCart} from '../services/cart.service';

export const authReducer: Reducer<AuthState, AuthActions> = (state, action) => {
  switch (action.type) {
    case 'auth':
      state = {...state, authenticated: action.payload as boolean};
      return state;
    case 'token':
      localStorage.setItem('token', action.payload as string)
      state = {...state, token: action.payload as string};
      return state;
    default:
      throw new Error();
  }
}

export const cartReducer: Reducer<Cart, CartActions> = (state, action) => {
  switch (action.type) {
    case 'add':
      addToCart(action.payload.item, action.payload.quantity)
      return  state = new Map(getAll())
    case 'update':
      updateInCart(action.payload.item, action.payload.quantity)
      return  state = new Map(getAll())
    case 'remove':
      removeFromCart(action.payload.item)
      return state = new Map(getAll())
    default:
      throw new Error();
  }
}