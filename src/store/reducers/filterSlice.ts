import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISort } from "../../models/ISort";

interface FilterState {
    search: string;
    sort: ISort;
    delay: string;
}

const initialState: FilterState = {
    search: "",
    sort: "",
    delay: ""
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setSort: (state, action: PayloadAction<ISort>) => {
            state.sort = action.payload
        },
        setDelay: (state, action: PayloadAction<string>) => {
            state.delay = action.payload
        },
    },
})

export const { setSearch, setSort, setDelay } = filterSlice.actions;

export default filterSlice.reducer;