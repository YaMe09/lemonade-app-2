import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice'; 
import Navbar from '../components/navbar';

function Køb() {
  const [drinks, setDrinks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon')
      .then((response) => response.json())
      .then((data) => {
        // Tilføj en pris til hver drink
        const drinksWithPrice = (data.drinks || []).map(drink => ({
          ...drink, 
          price: 10

      }));
      setDrinks(drinksWithPrice);
      });
  }, []);

  

  return (
    <>
         <Navbar />
    <div className="container mt-5">
      <div className="columns is-multiline">
        {drinks.map((drink) => (
          <div key={drink.idDrink} className="column is-one-third">
            <div className="card is-medium">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4" style={{ color: '#188151' }}>{drink.strDrink}</p>
                <p className="subtitle is-6 mt-4">{drink.strCategory}</p>
                <p className="subtitle is-6">{drink.strGlass}</p>
                <p className="subtitle is-6">{drink.strInstructions}</p>
                
                <button className="button has-shadow mt-5" style={{ boxShadow: '#50f4a9 0 0 0.5em', color: '#188151' }}
                    onClick={() => dispatch(addToCart({ id: drink.idDrink, name: drink.strDrink, price: drink.price, quantity: 1  }))} >
                    Tilføj til kurv 🍋 $ 10
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Køb;