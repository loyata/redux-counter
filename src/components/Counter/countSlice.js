import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{count: 0},
    reducers:{
        increment:(state) => {
            state.count += 1;
        },
        decrement:(state) => {
            state.count -= 1;
            if(state.count < 0) state.count = 0;
        },
        addSelfDefined:(state, action) => {
            state.count += action.payload;
        },
        reset: state => {
            console.log("reset");
            state.count = 0;
        }
    }
})

export const {increment, decrement, addSelfDefined, reset} = counterSlice.actions;
export default counterSlice.reducer;


