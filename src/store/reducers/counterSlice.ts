import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.value += 1
        },
        decrementCounter: (state) => {
            state.value -= 1
        },
        incrementByAmountCounter: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const {
    incrementCounter, decrementCounter, incrementByAmountCounter
} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;