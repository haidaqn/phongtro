import { createAsyncThunk } from '@reduxjs/toolkit';
import categoryApis from '@/apiClient/category'; 
import { Category } from '@/models';

interface responseData {
    err: number;
    response: Category[];
    msg: string;
}

export const getCategories = createAsyncThunk('app/category', async (data, { rejectWithValue }) => {
    const response: unknown = await categoryApis.getAll();
    const responseCover: responseData = response as responseData;
    // console.log(response);
    if (responseCover?.err) return rejectWithValue(responseCover);
    return responseCover.response;
});
