import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./pages/transaction/transactionSlice.js";

const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});

export default store;
