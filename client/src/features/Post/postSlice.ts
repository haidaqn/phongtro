import { Post } from '@/models/Post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as actions from './postAction';

export interface post {
    posts: Post[];
    isLoading: boolean;
    count: number;
    type: {
        priceCode: string;
        areaCode: string;
        page: number;
    };
}

let initialState: post = {
    posts: [],
    isLoading: false,
    count: 0,
    type: {
        priceCode: '',
        areaCode: '',
        page: 0,
    },
};

export const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setType(state, action) {
            state.count = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(actions.getPostLimit.fulfilled, (state, action) => {
            state.posts = action.payload.rows;
            state.count = action.payload.count;
            state.type.areaCode = action.payload.type.areaCode || '';
            state.type.priceCode = action.payload.type.priceCode || '';
            state.type.page = action.payload.type.page || 0;
        });
    },
});

export const { setType } = PostSlice.actions;

export default PostSlice.reducer;
