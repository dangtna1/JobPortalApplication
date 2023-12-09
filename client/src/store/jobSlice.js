import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobList: [],
};

export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        updateJobList: (state, action) => {
            state.jobList = action.payload;
        },
    },
});

export const { updateJobList } = jobSlice.actions

export default jobSlice.reducer
