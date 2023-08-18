import { createAsyncThunk } from '@reduxjs/toolkit';
import postsApi from '@/apiClient/post';
import { Post } from '@/models/Post';

interface responseData {
    err:number,
    data: Post[],
    msg: string,
}

export const getPosts = createAsyncThunk('app/post', async (data, { rejectWithValue }) => {
    const response: unknown = await postsApi.getAll();
    const responseCover: responseData = response as responseData;
    // console.log(response);
    if (responseCover?.err) return rejectWithValue(responseCover);
    return responseCover.data;
});