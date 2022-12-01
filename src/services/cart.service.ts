import {Item} from '../shared/interfaces';
import {Cart} from '../shared/types';

export const cart: Cart = new Map();

function getAll() {
  return cart;
}

function addToCart(item: Item, quantity = 1) {
  for (const [key, value] of cart.entries()) {
    if (key.id === item.id) {
      cart.delete(key);
      cart.set(item, value + 1);
      return;
    }
  }
  cart.set(item, quantity);
}

function removeFromCart(item: Item) {
  cart.delete(item);
}

function updateInCart(item: Item, quantity: number) {
  cart.set(item, quantity);
}

function clearCart() {
  console.log(cart);
  cart.clear();
}

export {getAll, addToCart, removeFromCart, updateInCart, clearCart}