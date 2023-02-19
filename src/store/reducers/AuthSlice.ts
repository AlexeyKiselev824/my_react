import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
    auth: boolean;
    isLoading: boolean;
}

const initialState: AuthState = {
    auth: false,
    isLoading: true,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthTrue: (state) => {
            state.auth = true
        },
        setAuthFalse: (state) => {
            state.auth = false
        },
        setAuthLoadingFalse: (state) => {
            state.isLoading = false
        },
    }
})

export const { setAuthTrue, setAuthFalse, setAuthLoadingFalse } = AuthSlice.actions;

export default AuthSlice.reducer;