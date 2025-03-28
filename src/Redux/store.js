import { configureStore } from '@reduxjs/toolkit';
import LemonadeProfit from './Lemonade_profit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    LemonadeProfit: LemonadeProfit,
    cart: cartReducer,
  },
});

export default store;