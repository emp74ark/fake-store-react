import { Item } from "../shared/interfaces";

const cart = new Map<Item, number>();

function getAll() {
  return cart;
}

function addToCart(item: Item, quantity = 1) {
  for (const [key, value] of cart.entries()) {
    if ( key.id === item.id) {
      removeFromCart(item);
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
  cart.set(item, quantity)
}

export {getAll, addToCart, removeFromCart, updateInCart}