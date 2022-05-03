import React from 'react';
import { useContext } from 'react';
import { getCartTotal } from './reducer';
import { StateContext } from './StateProvider';

import './Subtotal.css';

function Subtotal() {
  const { cart } = useContext(StateContext);

  return (
    <div className='subtotal'>
      {/* Price */}
      <p>
        Subtotal ({cart.length} items): <strong>₹ {getCartTotal(cart)}</strong>
      </p>
      <small className='subtotal__gift'>
        <input type='checkbox' /> This order contains a gift card
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
