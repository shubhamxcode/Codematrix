
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from "../Feature/addtofav/Addtofav"
import theme from '../Feature/addtofav/Addtofav'
export const store = configureStore({
  reducer:{
    favorites:favoritesReducer,
    Theme:theme,
  },
});

export default store