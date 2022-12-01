import './product.component.scss';
import {FC, useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getSingle} from '../../services/items.service';
import {Item} from '../../shared/interfaces';
import {SpinnerComponent} from '../../components/spinner/spinner.component';
import {authContext, cartContext} from '../../context/state';

export const ProductComponent: FC = () => {
  const {id} = useParams()
  const [item, setItem] = useState<Item>();
  const [loading, setLoading] = useState(false)
  const {dispatch} = useContext(cartContext);
  const {state} = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getSingle(Number(id)).then(
        response => {
          if (response.status === 200) {
            setItem(response.data)
            setLoading(false)
          }
        }
    )
  }, [])

  const addToCartHandler = () => {
    if (state.authenticated) {
      dispatch({type: 'add', payload: {item: item!, quantity: 1}});
    } else {
      navigate('/auth')
    }
  }

  return (
      <>
        {loading && <SpinnerComponent/>}
        <h2>{item?.title}</h2>
        <div className="item__description">
          <div className="product__left">
            <p>
              {item?.description}
            </p>
            <ul>
              <li>Price: {item?.price}</li>
              <li>Rating: {item?.rating.rate}</li>
              <li>Category: {item?.category}</li>
            </ul>
            <button onClick={addToCartHandler}>Add to cart</button>
          </div>
          <div className="product__right">
            <img src={item?.image} alt={item?.title}/>
          </div>
        </div>
      </>
  )

}