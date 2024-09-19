import { createSlice } from "@reduxjs/toolkit";


const rankingSlice = createSlice({
    name: 'rankingSlice',
    initialState: {
        onHomePage: true,
    },
    reducers: {
        homePage: (state) => {
            state.onHomePage = true
        },
        rankingPage: (state) => {
            state.onHomePage = false
        }
    }
})

export const actions = rankingSlice.actions;

export default rankingSlice;