import { configureStore } from "@reduxjs/toolkit";
import cardreducer from '../app/store'

export const store=configureStore({
    reducer:{
        cards:cardreducer,
    }
})