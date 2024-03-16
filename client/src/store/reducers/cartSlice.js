import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartState: (state, action) => {
            state.cart = action.payload;
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
    },
});

export const { setCartState, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
