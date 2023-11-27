import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '~/features/search/searchSlice';
import searchingResultsReducer from '~/features/searchResults/searchResultsSlice';
import spotlightReducer from '~/features/spotlight/spotlightSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        searchResults: searchingResultsReducer,
        spotlight: spotlightReducer,
    },
});
