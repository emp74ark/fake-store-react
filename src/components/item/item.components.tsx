import "./item.component.scss";
import { FC } from "react";
import { Item } from "../../shared/interfaces";

export const ItemComponents: FC<Item> = (item) => {
  return (
    <div className="item">
      <h4>{`${item.title.slice(0, 20)}...`}</h4>
      <img src={item.image} alt={item.title}/>
      <span className="item__price">{item.price}</span>
      <button>Add to cart</button>
    </div>
);
}