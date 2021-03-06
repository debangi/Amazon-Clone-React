import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';
import { StateContext } from './StateProvider';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';

function Header() {
  const { cart, user } = useContext(StateContext);
  const handleAuthenticaton = async () => {
    if (user) {
      await signOut(auth);
    }
  };

  return (
    <Fragment>
      <nav className='header'>
        <Link to='/'>
          <img
            className='header__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='logo'
          />
        </Link>
        <div className='header__search'>
          <input type='text' className='header__searchInput' />
          <SearchIcon className='header__searchIcon' />
        </div>
        {/* 3 links */}
        <div className='header__nav'>
          <Link className='header__link' to={!user && '/login'}>
            <div className='header__option' onClick={handleAuthenticaton}>
              <span className='header__optionLineOne'>
                Hello {!user ? 'Guest' : user.email}
              </span>
              <span className='header__optionLineTwo'>
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </Link>
          <Link className='header__link' to='/'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Returns</span>
              <span className='header__optionLineTwo'>& Orders</span>
            </div>
          </Link>
          <Link className='header__link' to='/'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Your</span>
              <span className='header__optionLineTwo'>Prime</span>
            </div>
          </Link>
          <Link className='header__link' to='/checkout'>
            <div className='header__optionCart'>
              <ShoppingCartIcon />
              <span className='header__optionLineTwo header__cartCount'>
                {cart?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default Header;
