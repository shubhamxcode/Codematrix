import { createSlice } from "@reduxjs/toolkit";

 const savfav=(items)=>{
  localStorage.setItem("favorites",JSON.stringify(items))
 }
 const intialfav=JSON.parse(localStorage.getItem("favorites"))

const savtheame=(theme)=>{
  localStorage.setItem("Theme",JSON.stringify(theme))
}
const intialtheme=JSON.parse(localStorage.getItem("Theme"))

const favoritesslice=createSlice({
  name:'favorites',
  initialState:{
    items:intialfav||[],
    theme:intialtheme,
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
    },
   toggletheme:(state)=>{
    state.theme=state.theme==='dark'?'light':'dark'
    savtheame(state.theme)
   }
   
  } 
})



export const{addtofav,removetofav,toggletheme,settheme}=favoritesslice.actions;
export default favoritesslice.reducer