import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '~/features/search/SearchSlice';
import cartReducer from '~/features/cart/CartSlice';
import authReducer from '~/features/login/AuthSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        cart: cartReducer,
        auth: authReducer,
    },
});
