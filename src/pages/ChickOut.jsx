import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ChickOut() {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    

  return (
    <div>
        <div className="container mt-5">
            <div className='box mt-5'>
                <h2 className="title">Checkout</h2>
                <div className="box">
                <ul className="list">
              {cartItems.map((item) => (
                <li key={item.idDrink}>
                 {item.name} - {item.quantity} stk. - ${item.price * item.quantity}
                </li>
              ))}
            </ul>
          </div>
          <button 
            onClick={() => navigate('/tak')} 
            className="button has-shadow mt-5" 
            style={{ boxShadow: '#50f4a9 0 0 0.5em', color: '#188151' }}
          >
            Tjek Ud 🍋
          </button>
        </div>
      </div>
    </div>
  );
}