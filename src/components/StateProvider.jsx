import { createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

export const StateContext = createContext({
  cart: [],
  user: null,
  addToCart: () => {},
  removeFromCart: () => {},
  addCurrentUser: () => {},
  removeCurrentUser: () => {},
});
export const StateProvider = ({ children }) => {
  const [{ cart, user }, dispatch] = useReducer(reducer, initialState);

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
  };
  const removeFromCart = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };
  const addCurrentUser = (user) => {
    dispatch({
      type: 'SET_USER',
      user: user,
    });
  };
  const removeCurrentUser = () => {
    dispatch({
      type: 'SET_USER',
      user: null,
    });
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    addCurrentUser,
    removeCurrentUser,
    user,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
