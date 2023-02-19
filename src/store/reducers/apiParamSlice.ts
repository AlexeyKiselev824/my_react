import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ApiParamState {
    page: number;
    limit: number;
}

const initialState: ApiParamState = {
    page: 1,
    limit: 5,
}

export const apiParamSlice = createSlice({
    name: 'apiParam',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        }
    },
})

export const { setPage, setLimit } = apiParamSlice.actions;

export const apiInitialState = apiParamSlice.getInitialState();

export default apiParamSlice.reducer;