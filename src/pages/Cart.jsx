import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import 'bulma/css/bulma.min.css';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import Trest from '../assets/Trest.jpg';


function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <>
      <Navbar />
      <div className="container mt-5">
        
        {cartItems.length === 0 ? (
          <div className='container container is-flex is-flex-direction-column is-justify-content-center is-align-items-center' style={{ backgroundImage: `url(${Trest})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '95vh' }}>
            <div className='mt-5 ml-5 is-align-items-center'>
               <p className="title mt-5">Din kurv er tom 🍋!</p>
            </div>
          </div>
        ) : (
        <>
            <div className="box">
             {cartItems.map((item) => (
              <div className="media mb-4" key={item.id}>
                <div className="media-content">
                  <p className="title is-5">{item.name}</p>
                  <p>Antal: {item.quantity}</p>
                  <button
                    className="button is-danger is-small m-1"
                    onClick={() => dispatch(removeFromCart({ idDrink: item.idDrink }))}
                  >
                    Fjern
                  </button>
                  <button className="button is-small m-1" onClick={() => dispatch(updateQuantity({ idDrink: item.idDrink, quantity: item.quantity + 1 }))}>
                     +
                  </button>
                  <button className="button is-small m-1" onClick={() => dispatch(updateQuantity({ idDrink: item.idDrink, quantity: item.quantity - 1 }))} >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="button has-shadow my-3 mr-3" style={{ boxShadow: '#b6baba 0 0 0.5em', color: '#188151' }}
                    onClick={() => navigate('/chick-out')} >
                    Chick out
          </button>
        </>
      )}
    </div>
  </>
  );
}

export default Cart;