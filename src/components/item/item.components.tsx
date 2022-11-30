import "./item.component.scss";
import { FC } from "react";
import { Item } from "../../shared/interfaces";
import { addToCart } from "../../services/cart.service";

export const ItemComponents: FC<Item> = (item) => {
  const addToCartHandler = () => {
    addToCart(item)
  }
  return (
    <div className="item">
      <h4>{`${item.title.slice(0, 20)}...`}</h4>
      <img src={item.image} alt={item.title}/>
      <span className="item__price">{item.price}</span>
      <button onClick={addToCartHandler}>Add to cart</button>
    </div>
);
}