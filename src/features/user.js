import { createSlice } from "@reduxjs/toolkit";

const initialState = { "login": false };

export const loginSlice = createSlice({
    name: "userLogin",
    initialState: {value: initialState},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialState;
        }
    }
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;