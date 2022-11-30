import "./cart.component.scss";
import { FC, useEffect, useState } from "react";
import { Item } from "../../shared/interfaces";
import { getAll, removeFromCart, updateInCart } from "../../services/cart.service";

export const CartComponent: FC = () => {
  const [cart, setCart] = useState<Item[]>([]);
  useEffect(() => {
    for (const [key, value] of getAll()){
      const cartItem = {
        ...key,
        quantity: value,
      }
      setCart([...cart, cartItem])
    }
  }, [])

  const remove = (item: Item) => {
    removeFromCart(item);
  }

  const update = (e: React.ChangeEvent<HTMLInputElement> ,item: Item) => {
    updateInCart(item, Number(e.target.value))
  }
  return (
      <>
        {
          cart.length !== 0 &&
            <>
              <h2>Cart</h2>
              {cart.map(item => (
                <div className="cart__items">
                  <div className="cart__item" key={item.id}>
                    <div className="cart__item-title">{item.title}</div>
                    <div className="cart__item-quantity">
                    <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={item.quantity}
                    onChange={(e) => update(e, item)}
                    />
                    <button onClick={() => remove(item)}>Remove</button>
                    </div>
                  </div>
                </div>))}
            </>
        }
        {
          cart.length === 0 &&
          <section className="empty__cart">
            <h2>Nothing was added</h2>
          </section>
        }
      </>
  );
}