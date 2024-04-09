import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import AuthSlice from "./auth";

//main store which contains multiple reducers
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: AuthSlice.reducer,
    },
});



export default store;