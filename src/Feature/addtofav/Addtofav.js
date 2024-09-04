import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(card => card.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = cardSlice.actions;

export default cardSlice.reducer;
