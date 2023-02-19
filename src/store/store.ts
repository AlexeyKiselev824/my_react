import { configureStore } from "@reduxjs/toolkit";
import { postsAPI } from "../services/PostsService";
import counterReducer from "./reducers/counterSlice";
import formPostReducer from "./reducers/postFormSlice";
import filterReducer from "./reducers/filterSlice";
import apiParamReducer from "./reducers/apiParamSlice";
import pagePostReducer from "./reducers/pagePostEditor";
import authReducer from './reducers/AuthSlice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        auth: authReducer,
        pagePostEditor: pagePostReducer,
        apiParam: apiParamReducer,
        formCreate: formPostReducer,
        counter: counterReducer,
        [postsAPI.reducerPath]: postsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch