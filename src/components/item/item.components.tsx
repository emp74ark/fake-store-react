import './item.component.scss';
import {FC, useContext} from 'react';
import {Item} from '../../shared/interfaces';
import {useNavigate} from 'react-router-dom';
import {authContext, cartContext} from '../../context/state';

export const ItemComponents: FC<Item> = (item) => {
  const navigate = useNavigate();
  const {dispatch} = useContext(cartContext);
  const {state} = useContext(authContext);
  const addToCartHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (state.authenticated) {
      dispatch({type: 'add', payload: {item: item, quantity: 1}});
    } else {
      navigate('/auth')
    }
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