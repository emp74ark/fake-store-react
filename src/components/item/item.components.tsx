import "./item.component.scss";
import { FC } from "react";
import { Item } from "../../shared/interfaces";
import { addToCart } from "../../services/cart.service";
import { useNavigate } from "react-router-dom";

export const ItemComponents: FC<Item> = (item) => {
  const navigate = useNavigate();
  const addToCartHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(item);
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