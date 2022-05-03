import { Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import { useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import { StateContext } from './components/StateProvider';

function App() {
  const { user, addCurrentUser, removeCurrentUser } = useContext(StateContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        addCurrentUser(currentUser);
      } else {
        removeCurrentUser();
      }
    });
    return unsubscribe;
  }, []);
  console.log(user);
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
