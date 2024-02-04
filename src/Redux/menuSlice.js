
import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice( {

    name: 'goods',
    initialState: {
        selectedCategory: 'Супер сэты',
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    }
})

export const getSelectedCategory = state => state.goods.selectedCategory;
export const { filterCategory } = menuSlice.actions;
export default menuSlice.reducer;