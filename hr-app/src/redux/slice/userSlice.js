import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullname: '', 
    imageUrl: ''
}

export const userSlice = createSlice({
    name: 'user', 
    initialState, 
    reducers: {
        setUser: (prevState = initialState, action) => {
            prevState.fullname = action.payload.fullname
            prevState.imageUrl = action.payload.imageUrl
        }
    }
})

export const {setUser} = userSlice.actions

export default userSlice.reducer    