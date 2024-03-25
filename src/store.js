import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from './features/quotesSlice.js'; 

const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});

export default store;
