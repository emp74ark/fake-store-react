import { Item } from "../shared/interfaces";
import {Cart} from '../shared/types';

export const cart: Cart = new Map();

function getAll() {
  return cart;
}

function addToCart(item: Item, quantity = 1) {
  for (const [key, value] of cart.entries()) {
    if ( key.id === item.id) {
      removeFromCart(item);
      cart.set(item, value + 1);
      return cart;
    }
  }
  cart.set(item, quantity);
  return cart;
}

function removeFromCart(item: Item) {
  cart.delete(item);
  return cart;
}

function updateInCart(item: Item, quantity: number) {
  cart.set(item, quantity)
  return cart;
}

export {getAll, addToCart, removeFromCart, updateInCart}