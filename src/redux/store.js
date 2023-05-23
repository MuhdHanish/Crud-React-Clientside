import { configureStore } from "@reduxjs/toolkit";

import editUserReducer from "./Admin/editUserSlice";


const store = configureStore({
 reducer:{
  editUser:editUserReducer,
 }
})

export default store