import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id:'',
    username:'',
    email:'',
    image:''
}

const userProfileSlice = createSlice({
    name:'UserProfile',
    initialState:initialState,
    reducers:{
        setUserProfile:(state,action)=>{
            state.id=action.payload?.id
            state.username=action.payload?.username
            state.email=action.payload?.email
            state.image=action.payload?.image
        }
    }
})

export const {setUserProfile} = userProfileSlice.actions
export default userProfileSlice.reducer