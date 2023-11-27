import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    collections: [],
    accounts: [],
    isCollectionsLoading: false,
    isAccountsLoading: false,
    hasCollectionsError: false,
    hasAccountsError: false,
};

export const loadCollections = createAsyncThunk('searchResults/loadCollections', async (searchTerm) => {
    console.log('loading collections...');
    const data = await fetch(`api/collections?search=${searchTerm}`);
    const json = await data.json();
    return json;
});

export const loadAccounts = createAsyncThunk('searchResults/loadAccounts', async (searchTerm) => {
    console.log('loading accounts...');
    const data = await fetch(`api/accounts?search=${searchTerm}`);
    const json = await data.json();
    return json;
});

export const searchResultsSlice = createSlice({
    name: 'searchResults',
    initialState,
    reducers: {
        clearCollections: (state) => {
            state.collections = [];
        },
        clearAccounts: (state) => {
            state.accounts = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCollections.pending, (state) => {
                state.isCollectionsLoading = true;
                state.hasCollectionsError = false;
            })
            .addCase(loadCollections.fulfilled, (state, action) => {
                state.collections = action.payload;
                state.isCollectionsLoading = false;
                state.hasCollectionsError = false;
            })
            .addCase(loadCollections.rejected, (state) => {
                state.isCollectionsLoading = false;
                state.hasCollectionsError = true;
            })
            .addCase(loadAccounts.pending, (state) => {
                state.isAccountsLoading = true;
                state.hasAccountsError = false;
            })
            .addCase(loadAccounts.fulfilled, (state, action) => {
                state.accounts = action.payload;
                state.isAccountsLoading = false;
                state.hasAccountsError = false;
            })
            .addCase(loadAccounts.rejected, (state) => {
                state.isAccountsLoading = false;
                state.hasAccountsError = true;
            });
    },
});
export const { clearCollections, clearAccounts } = searchResultsSlice.actions;
export const selectSearchedAccounts = (state) => state.searchResults.accounts;
export const selectSearchedCollections = (state) => state.searchResults.collections;
export const isLoadingCollections = (state) => state.searchResults.isCollectionsLoading;
export const isLoadingAccounts = (state) => state.searchResults.isAccountsLoading;

export default searchResultsSlice.reducer;
