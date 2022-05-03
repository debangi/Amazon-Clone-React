import { createContext, useReducer } from 'react';
import cartReducer, { initialState } from './reducer';

export const StateContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});
export const StateProvider = ({ children }) => {
  const [{ cart }, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, title, image, price, rating) => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
    console.log(title);
  };
  const removeFromCart = () => {};

  const value = { cart, addToCart, removeFromCart };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
