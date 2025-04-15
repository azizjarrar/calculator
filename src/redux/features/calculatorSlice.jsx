import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adSpend: 250000,
  revenue: 250000,
  roas: 1,
  newAdSpend:207500,
  newRevenue:292500,
  newRoas: 1.17,
  adSpendReduction: 42500,
  revenueIncrease: 42500,
  roasIncrease: 0,
  savings: 85000
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateAdSpend: (state, action) => {
      state.adSpend = action.payload;
      state.adSpendReduction = action.payload * 0.17;
      state.newAdSpend = action.payload - state.adSpendReduction;
      state.roas = (Number(state.revenue) / Number(state.adSpend)).toFixed(2);
      state.roasIncrease = state.roas * 0.17;
      state.newRoas = (Number(state.roas) + state.roasIncrease).toFixed(2);
      state.savings = state.adSpendReduction + state.revenueIncrease;
    },
    updateRevenue: (state, action) => {
      state.revenue = action.payload;
      state.revenueIncrease = action.payload * 0.17;
      state.newRevenue = Number(action.payload) + state.revenueIncrease;
      state.roas = (Number(state.revenue) / Number(state.adSpend)).toFixed(2);
      state.roasIncrease = state.roas * 0.17;
      state.newRoas = (Number(state.roas) + state.roasIncrease).toFixed(2);
      state.savings = state.adSpendReduction + state.revenueIncrease;
    },
  },
});

export const { updateAdSpend, updateRevenue } = calculatorSlice.actions;
export default calculatorSlice.reducer;