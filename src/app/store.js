import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '~/features/search/searchSlice';
import cartReducer from '~/features/cart/cartSlice';
import searchingResultsReducer from '~/features/searchResults/searchResultsSlice';
import spotlightReducer from '~/features/spotlight/spotlightSlice';
import authReducer from '~/features/login/AuthSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        cart: cartReducer,
        auth: authReducer,
        searchResults: searchingResultsReducer,
        spotlight: spotlightReducer,
    },
});
