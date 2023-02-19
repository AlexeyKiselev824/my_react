import { createSlice } from "@reduxjs/toolkit"

interface pagePostEditorState {
    visible: boolean;
}

const initialState: pagePostEditorState = {
    visible: false,
}

export const pagePostEditorSlice = createSlice({
    name: 'pagePostEditor',
    initialState,
    reducers: {
        setVisibleEditor: (state) => {
            state.visible = true
        },
        setInvisibleEditor: (state) => {
            state.visible = false
        }
    }
})

export const { setVisibleEditor, setInvisibleEditor } = pagePostEditorSlice.actions;

export default pagePostEditorSlice.reducer;