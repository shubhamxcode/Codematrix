import { createSlice } from "@reduxjs/toolkit";

 const savfav=(items)=>{
  localStorage.setItem("favorites",JSON.stringify(items))
 }
 const intialfav=JSON.parse(localStorage.getItem("favorites"))


const favoritesslice=createSlice({
  name:'favorites',
  initialState:{
    items:intialfav||[],
  },
  reducers:{
    addtofav:(state,action)=>{
      if (!state.items.some((item)=>item.id==action.payload.id)){
        state.items.push(action.payload)
        savfav(state.items)
      }
    },
    removetofav:(state,action)=>{
      state.items=state.items.filter((item)=>item.id!==action.payload)
      savfav(state.items)
    }
  } 
})


export const{addtofav,removetofav}=favoritesslice.actions;
export default favoritesslice.reducer