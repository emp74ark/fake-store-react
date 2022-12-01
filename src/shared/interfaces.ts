import {Cart} from './types';

export interface Item {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number;
}

export interface User {
  email?: string;
  username: string;
  password?: string;
  name?: {
    firstname: string;
    lastname: string;
  };
  address?: {
    city: string;
    street: string;
    number: number
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone?: string;
}

export interface AuthResponse {
  token: string;
}

export interface AuthActions {
  type: 'auth' | 'token';
  payload: string | boolean;
}

export interface AuthState {
  authenticated: boolean;
  token: string;
}
export interface AuthContext {
  state: AuthState;
  dispatch: React.Dispatch<AuthActions>
}

export interface Children {
  children: JSX.Element;
}

export interface CartActions {
  type: 'add' | 'update' | 'remove';
  payload: {item: Item, quantity: number};
}

export interface CartContext {
  state: Cart;
  dispatch: React.Dispatch<CartActions>;
}