import { createSlice } from "@reduxjs/toolkit";

const favoritesslice=createSlice({
  name:'favorites',
  initialState:{
    items:[],
  },
  reducers:{
    addtofav:(state,action)=>{
      state.items.push(action.payload);
    },
    removetofav:(state,action)=>{
      state.items=state.items.filter((card)=>card.id!==action.payload)
    }
  }
})


export const{addtofav,removetofav}=favoritesslice.actions;
export default favoritesslice.reducer

