import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface postFormState {
    title: string;
    body: string;
}

const initialState: postFormState = {
    title: '',
    body: ''
}

export const postFormSlice = createSlice({
    name: 'postForm',
    initialState,
    reducers: {
        setTitlePost: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setBodyPost: (state, action: PayloadAction<string>) => {
            state.body = action.payload;
        },
        resetForm: () => initialState
    },
})

export const { setBodyPost, setTitlePost, resetForm } = postFormSlice.actions;

export default postFormSlice.reducer;