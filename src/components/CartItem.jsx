import React, { useContext } from 'react';
import { StateContext } from './StateProvider';

import './CartItem.css';

function CartItem({ id, title, price, rating, image }) {
  const { removeFromCart } = useContext(StateContext);

  return (
    <div className='cartItem'>
      <img className='cartItem__image' src={image} alt='' />
      <div className='cartItem__info'>
        <p className='cartItem__title'>{title}</p>
        <p className='cartItem__price'>
          <span>₹</span>
          <strong>{price}</strong>
        </p>
        <div className='cartItem__rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={() => removeFromCart(id)}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CartItem;
