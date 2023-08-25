import { createAsyncThunk } from '@reduxjs/toolkit';
import categoryApis from '@/apiClient/category';
import { Category, PriceAndArea } from '@/models';

interface responseData {
    err: number;
    response: Category[];
    msg: string;
}

interface responsePriceAndAreaData {
    err: number;
    response: PriceAndArea[];
    msg: string;
}

export const getCategories = createAsyncThunk('app/category', async (data, { rejectWithValue }) => {
    const response: unknown = await categoryApis.getAll();
    const responseCover: responseData = response as responseData;
    // console.log(response);
    if (responseCover?.err) return rejectWithValue(responseCover);
    return responseCover.response;
});

export const getPrice = createAsyncThunk('app/price', async (data, { rejectWithValue }) => {
    const response: unknown = await categoryApis.getAllPrice();
    const responseCover: responsePriceAndAreaData = response as responsePriceAndAreaData;
    if (responseCover?.err) return rejectWithValue(responseCover);
    return responseCover.response;
});

export const getArea = createAsyncThunk('app/area', async (data, { rejectWithValue }) => {
    const response: unknown = await categoryApis.getAllS();
    const responseCover: responsePriceAndAreaData = response as responsePriceAndAreaData;
    if (responseCover?.err) return rejectWithValue(responseCover);
    return responseCover.response;
});
