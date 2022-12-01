import {FC, useContext} from 'react';
import {Item} from '../../shared/interfaces';
import {cartContext} from '../../context/state';

export const CartItem: FC<{item: Item, quantity: number}> = ({item, quantity}) => {
  const {dispatch} = useContext(cartContext);
  const update = (e: React.ChangeEvent<HTMLInputElement>, item: Item) => {
    dispatch({type: 'update', payload: {item: item, quantity: Number(e.target.value)}});
  }
  const remove = (item: Item) => {
    dispatch({type: 'remove', payload: {item: item, quantity: 0}});
  }
  return (
      <div className="cart__items">
        <div className="cart__item" key={item.id}>
          <div className="cart__item-title">{item.title}</div>
          <div className="cart__item-quantity">
            <input
                type="number"
                name="quantity"
                id="quantity"
                value={quantity}
                min={1}
                onChange={(e) => update(e, item)}
            />
            <button onClick={() => remove(item)}>Remove</button>
          </div>
        </div>
      </div>
  );
}