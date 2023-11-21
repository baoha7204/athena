import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '~/features/search/SearchSlice'
import cartReducer from '~/features/cart/CartSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        cart: cartReducer,
    }
})