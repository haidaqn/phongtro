import { createAsyncThunk } from '@reduxjs/toolkit';
import postsApi from '@/apiClient/post';
import { Post } from '@/models/Post';

interface responseData {
    err: number;
    data: {
        rows: Post[];
        count: number;
    };
    msg: string;
}

interface data {
    query: {
        page: number;
        categoryCode: string | null;
    };
}

export const getPosts = createAsyncThunk('app/post', async (data, { rejectWithValue }) => {
    const response: unknown = await postsApi.getAll();
    const responseCover: responseData = response as responseData;
    // console.log(response);
    if (responseCover?.err) return rejectWithValue(responseCover);
    return responseCover.data;
});

export const getPostLimit = createAsyncThunk('app/post', async (data: data, { rejectWithValue }) => {
    const { page, categoryCode, ...dk } = data.query;
    console.log(categoryCode);
    const response: unknown = await postsApi.getLimit(data);
    const responseCover: responseData = response as responseData;
    if (responseCover?.err) return rejectWithValue(responseCover);
    return { ...responseCover.data, type: dk };
});
