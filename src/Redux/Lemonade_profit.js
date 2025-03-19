import { createSlice } from '@reduxjs/toolkit'; 


const initialState = {
  lager: 50,
  lemon: 0,
};

const lemonadeProfitSlice = createSlice({
  name: 'LemonadeProfit',
  initialState,
  reducers: {
    sellLemonade: (state) => {
      state.lemon += 5; // Profit øges med 5
      state.lager -= 1; // Lager reduceres med 1
    },
    buyLemons: (state) => {
      state.lemon -= 2; // Profit reduceres med 2
      state.lager += 1; // Lager øges med 1
    },
  },
});

export const { sellLemonade, buyLemons } = lemonadeProfitSlice.actions;
export default lemonadeProfitSlice.reducer;