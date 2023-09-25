import { Category, PriceAndAreaAndProvince } from '@/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as actions from './categoryActions';

export interface category {
    category: Category[];
    price: PriceAndAreaAndProvince[];
    area: PriceAndAreaAndProvince[];
    provinces: PriceAndAreaAndProvince[];
}

let initialState: category = {
    category: [],
    price: [],
    area: [],
    provinces: [],
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
            })
            .addCase(actions.getProvinces.fulfilled, (state, action) => {
                state.provinces = action.payload;
            });
    },
});

export const {} = CategorySlice.actions;

export default CategorySlice.reducer;
