import './cart.component.scss';
import {FC, useContext} from 'react';
import {CartItem} from './cart.item';
import {cartContext} from '../../context/state';

export const CartComponent: FC = () => {
  const {state} = useContext(cartContext);

  return (
      <>
        {
            state.size !== 0 &&
            <>
              <h2>Cart</h2>
              {
                [...state.entries()].map(
                    ([item, quantity]) => <CartItem key={item.id} item={item} quantity={quantity}/>
                )
              }
            </>
        }
        {
            state.size === 0 &&
            <section className="empty__cart">
              <h2>Nothing was added</h2>
            </section>
        }
      </>
  );
}