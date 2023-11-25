import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // initial state
    spotlight: [],
    isLoading: false,
    hasError: false,
};

export const spotlightSlice = createSlice({
    name: 'spotlight',
    initialState,
    reducers: {
        // reducers
    },
});

export default spotlightSlice.reducer;
