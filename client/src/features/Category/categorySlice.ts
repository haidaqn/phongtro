import { Category, PriceAndArea } from '@/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as actions from './categoryActions';

export interface category {
    category: Category[];
    price: PriceAndArea[];
    area: PriceAndArea[];
}

let initialState: category = {
    category: [],
    price: [],
    area: [],
};

export const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actions.getCategories.fulfilled, (state, action) => {
                state.category = action.payload;
            })
            .addCase(actions.getPrice.fulfilled, (state, action) => {
                state.price = action.payload;
            })
            .addCase(actions.getArea.fulfilled, (state, action) => {
                state.area = action.payload;
            });
    },
});

export const {} = CategorySlice.actions;

export default CategorySlice.reducer;
