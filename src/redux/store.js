import { configureStore } from "@reduxjs/toolkit";
import allProductSlice from "./slices/allProductSlice";


const store = configureStore({
   reducer:{
    allProductSlice
   }
})

export default store;