import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./features/calculatorSlice";

const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
  },
});

export default store;
