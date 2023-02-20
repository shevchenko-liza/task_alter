import { catalogSlice } from "./slices/catalog"
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
    reducer: {
        [catalogSlice.name]: catalogSlice.reducer,
    }
})