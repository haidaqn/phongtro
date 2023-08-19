import { Category } from '@/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as actions from './categoryActions';

export interface category {
    category: Category[];
}

let initialState: category = {
    category: [],
};

export const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actions.getCategories.fulfilled, (state, action) => {
            state.category = action.payload;
        })
    }
});

export const {  } = CategorySlice.actions;

export default CategorySlice.reducer;