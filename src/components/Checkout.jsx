import React from 'react';
import { useContext } from 'react';
import { StateContext } from './StateProvider';

import './Checkout.css';
import CartItem from './CartItem';
import Subtotal from './Subtotal';

function Checkout() {
  const { cart } = useContext(StateContext);

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        {cart?.length === 0 ? (
          <div>
            <h2>Your Cart is empty!</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              'Add To cart' next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Cart!</h2>
            {/* List all cart products */}
            {cart?.map((item) => (
              <CartItem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className='checkout__right'>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
