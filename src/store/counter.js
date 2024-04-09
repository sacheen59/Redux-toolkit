import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    showCounter: true,
}

// redux toolkit to create a slice of state 
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice;

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return {
//                 ...state,
//                 counter: state.counter + 1,
//             }
//         case "DECREMENT":
//             return {
//                 ...state,
//                 counter: state.counter - 1,
//             }
//         case "INCREASE_BY_FIVE":
//             return {
//                 ...state,
//                 counter: state.counter + action.payload
//             }

//         case "TOGGLE_COUNTER":
//             return {
//                 ...state,
//                 showCounter: !state.showCounter
//             }
//         default:
//             return state;
//     }
// }