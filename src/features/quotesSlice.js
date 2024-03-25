import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  quotes: [],
  // Load liked quotes from localStorage (if available)
  likedQuotes: localStorage.getItem('likedQuotes') ? JSON.parse(localStorage.getItem('likedQuotes')) : [], 
  filteredByTag: null,
  loading: false,
  error: null,
};

export const fetchQuotes = createAsyncThunk(
  'quotes/fetchQuotes',
  async () => {
    const response = await axios.get('https://api.quotable.io/quotes/random?limit=10');
    return response.data;
  }
);

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const quoteId = action.payload;
      // Avoid mutating original state
      const likedQuotes = state.likedQuotes.slice(); 

      const isLiked = likedQuotes.includes(quoteId);

      if (isLiked) {
        likedQuotes.splice(likedQuotes.indexOf(quoteId), 1);
      } else {
        likedQuotes.push(quoteId);
      }

      state.likedQuotes = likedQuotes;
      // Persist liked quotes in localStorage
      localStorage.setItem('likedQuotes', JSON.stringify(likedQuotes)); 
    },
    setFilterByTag: (state, action) => {
      state.filteredByTag = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.loading = false;
        state.quotes = action.payload;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { toggleLike, setFilterByTag } = quotesSlice.actions;
export default quotesSlice.reducer;
