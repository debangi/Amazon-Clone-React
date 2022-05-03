import React, { useContext } from 'react';
import { StateContext } from './StateProvider';
import './Product.css';

function Product({ id, title, image, price, rating }) {
  const { addToCart } = useContext(StateContext);

  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__title'>{title}</p>
        <p className='product__price'>
          <span>₹</span>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className='product__image' src={image} alt='' />
      <button onClick={() => addToCart(id, title, image, price, rating)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
