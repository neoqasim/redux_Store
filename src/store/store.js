// Import the 'configureStore' function from the Redux Toolkit library.
import { configureStore } from "@reduxjs/toolkit";

// Import the 'cartReducer' from the './cartSlice' file.
import cartReducer from "./cartSlice";

// Configure the Redux store using the 'configureStore' function.
// The 'configureStore' function takes an object with a 'reducer' property.
// Inside the 'reducer' object, we specify the slices of state and their corresponding reducers.
// In this case, we have one slice of state called 'cart', which is managed by the 'cartReducer'.
// We pass the 'cartReducer' to the 'configureStore' function to set up the store.
// The 'store' variable holds the configured Redux store that can be used throughout the application.
const store = configureStore({
    reducer: {
        cart: cartReducer // 'cart' is the name of the slice, and 'cartReducer' is the reducer function managing its state.
    }
})

export default store