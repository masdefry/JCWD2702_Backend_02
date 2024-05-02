import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullname: '' 
}

export const userSlice = createSlice({
    name: 'user', 
    initialState, 
    reducers: {
        setUser: (prevState = initialState, action) => {
            prevState.fullname = action.payload.fullname
        }
    }
})

export const {setUser} = userSlice.actions

export default userSlice.reducer    