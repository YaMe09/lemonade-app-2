import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sellLemonade, buyLemons } from './Redux/LemonadeProfitSlice'; 
import 'bulma/css/bulma.min.css';
import Image from './assets/2bagground.png';
import Navbar from './components/navbar';

function LemonadeStand() {
  const dispatch = useDispatch();
  const {lemon} = useSelector((state) => state.LemonadeProfit); 

  return (
    <>
      <Navbar />
      <div className="hero" style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '95vh' }}>
        <div className="container has-text-end pt-5 mt-5">
          <div className="hero-body has-text-end my-5 pt-5">
            <h1 className="title is-1 has-text-weight-medium my-5 ml-5" style={{ color: '#188151', textShadow: '#efd9b6 0 0 0.5em' }}>Lemonade Stand 🍋</h1>
            <h2 className="subtitle is-3 has-text-weight-normal my-5 ml-5" style={{ color: '#188151' }}>Lemonade Profit: $ {lemon}</h2>
            <div className="buttons is-end ml-5 mt-5">
              <button onClick={() => dispatch(sellLemonade())} className="button has-shadow mt-5" style={{ boxShadow: '#50f4a9 0 0 0.5em', color: '#188151' }}>
                Sælg Lemonade 🍋
              </button>
              <button onClick={() => dispatch(buyLemons())} className="button has-shadow mt-5" style={{ boxShadow: '#50f4a9 0 0 0.5em', color: '#188151' }}>
                Køb Citroner 🍋
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LemonadeStand;