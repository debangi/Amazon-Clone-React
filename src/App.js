import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
