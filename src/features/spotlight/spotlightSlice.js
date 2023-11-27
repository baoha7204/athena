import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    // initial state
    spotlights: [],
    isLoading: false,
    hasError: false,
};

export const loadSpotlights = createAsyncThunk('searchResults/loadSpotlights', async () => {
    console.log('loading spotlight...');
    const data = await fetch(`api/spotlights`);
    const json = await data.json();
    return json;
});

export const spotlightSlice = createSlice({
    name: 'spotlight',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadSpotlights.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadSpotlights.fulfilled, (state, action) => {
                state.spotlights = action.payload;
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadSpotlights.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            });
    },
});

export const selectSpotlights = (state) => state.spotlight.spotlights;
export const isLoadingSpotlights = (state) => state.spotlight.isLoading;
export const hasErrorSpotlights = (state) => state.spotlight.hasError;
export default spotlightSlice.reducer;
