import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    whishlist: [],
};

const whishlistSlice = createSlice({
    name: "whishlist",
    initialState,
    reducers: {
        setWhishlistState: (state, action) => {
            state.whishlist = action.payload;
        },
        addToWhishlist: (state, action) => {
            state.whishlist.push(action.payload)
        },
        removeProduct: (state, action) => {
            const newList = state.whishlist.filter((item) => item.name !== action.payload);
            state.whishlist = newList;
        },
        clearAll: (state, action) => {
            state.whishlist = [];
        },
    },
});

export const { setWhishlistState, addToWhishlist, removeProduct, clearAll } = whishlistSlice.actions;

export default whishlistSlice.reducer;
