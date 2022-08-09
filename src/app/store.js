import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/countSlice"

export const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})