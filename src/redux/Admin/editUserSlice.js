import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
   id:'',
   username:'',
   email:''
}

 const userEditSlice = createSlice({
 name:'editUser',
 initialState:initialState,
 reducers:{
  getUser:(state,action)=>{
   state.id=action.payload?.id
   state.username=action.payload?.username
   state.email=action.payload?.email
  }
 }
})

export const {getUser} = userEditSlice.actions 
export default userEditSlice.reducer