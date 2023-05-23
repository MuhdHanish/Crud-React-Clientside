import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import editUserReducer from "./Admin/editUserSlice";
import userProfileReducer from "./User/userProfileSlice"

const persistConfig = {
 key: "root",
 storage,
};

const persistedEditReducer = persistReducer(persistConfig, editUserReducer);
const persistedProfileReducer = persistReducer(persistConfig,userProfileReducer)

export const store = configureStore({
 reducer:{
  editUser:persistedEditReducer,
  userProfile:persistedProfileReducer
 },
 middleware: []
 })

export const persistor = persistStore(store)
