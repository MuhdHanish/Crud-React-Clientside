import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import editUserReducer from "./Admin/editUserSlice";

const persistConfig = {
 key: "root",
 storage,
};

const persistedEditReducer = persistReducer(persistConfig, editUserReducer);

export const store = configureStore({
 reducer:{
  editUser:persistedEditReducer,
 }
})

export const persistor = persistStore(store)
