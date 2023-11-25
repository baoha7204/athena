import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '~/features/search/SearchSlice';
import cartReducer from '~/features/cart/CartSlice';
import searchingResultsReducer from '~/features/searchResults/searchResultsSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        cart: cartReducer,
        searchResults: searchingResultsReducer,
    },
});
