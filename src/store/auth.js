import { createSlice } from "@reduxjs/toolkit";

//authentication slice
const initialAuthState = {
    isAuthenticated: false,
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

export const authActions = AuthSlice.actions;

export default AuthSlice;