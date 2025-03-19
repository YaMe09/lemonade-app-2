import { createSlice } from '@reduxjs/toolkit'; // Korrekt import

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.idDrink === action.payload.idDrink);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.idDrink !== action.payload.idDrink);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.idDrink === action.payload.idDrink);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;