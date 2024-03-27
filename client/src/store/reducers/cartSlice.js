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
        removeProduct: (state, action) => {
            const newList = state.cart.filter((item) => { item.name == action.payload })
            console.log(newList)
            state.cart = newList;
        },
    },
});

export const { setCartState, addToCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
