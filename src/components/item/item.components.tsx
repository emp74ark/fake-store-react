import './item.component.scss';
import {FC, useContext} from 'react';
import {Item} from '../../shared/interfaces';
import {useNavigate} from 'react-router-dom';
import {cartContext} from '../../context/state';

export const ItemComponents: FC<Item> = (item) => {
  const navigate = useNavigate();
  const {dispatch} = useContext(cartContext);
  const addToCartHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({type: 'add', payload: {item: item, quantity: 1}});
  }

  const openProduct = () => {
    navigate(`/store/${item.id}`);
  }
  return (
      <div className="item" onClick={openProduct}>
        <h4>{`${item.title.slice(0, 20)}...`}</h4>
        <img src={item.image} alt={item.title}/>
        <span className="item__price">{item.price}</span>
        <button onClick={addToCartHandler}>Add to cart</button>
      </div>
  );
}