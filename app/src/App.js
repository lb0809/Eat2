import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import CartState from './context/cart/CartState';

function App() {
  return (
    <>
    <CartState>
      <Router>
      <Navbar/>


          <Routes>


            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/search" element={<Search />} />

          </Routes>
        </Router>
    </CartState>
    </>
  );
}

export default App;
