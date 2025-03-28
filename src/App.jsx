
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forside from './pages/Forside';
import LemonadeStand from './lemonadeStand';
import Køb from './pages/køb';
import Cart from './pages/cart';
import ChickOut from './pages/ChickOut';
import Tak from './pages/Tak';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/lemonade-stand" element={<LemonadeStand />} />
        <Route path="/køb" element={<Køb />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/chick-out" element={<ChickOut />} />
        <Route path="/tak" element={<Tak />} />
      </Routes>
    </Router>
  )
}

export default App
