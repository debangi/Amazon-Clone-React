import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [username, setUsername] = useState('');
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentLoggedInUser(currentUser);
    });
  }, [currentLoggedInUser]);

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setCurrentLoggedInUser(user);
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  };
  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      setCurrentLoggedInUser(user);
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='login__signInButton' onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className='login__registerButton' onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
