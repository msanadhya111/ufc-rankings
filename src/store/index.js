import { configureStore } from "@reduxjs/toolkit";
import rankingSlice from "./rankingSlice";

const store = configureStore({
    reducer: rankingSlice.reducer
})

export default store;