import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload;
        },
        addToProductList: (state, action) => {
            state.productList.push(action.payload)
        },
    },
});

export const { setProductList, addToProductList } = productSlice.actions;

export default productSlice.reducer;
