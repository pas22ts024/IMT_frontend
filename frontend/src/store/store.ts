import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import userReducer from "./slices/userSlice.ts"
import imtsReducer from "./slices/imtsSlice.ts"
import categorysReducer from "./slices/categorysSlice.ts"

export const store = configureStore({
    reducer: {
        user: userReducer,
        imts: imtsReducer,
        categorys: categorysReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
