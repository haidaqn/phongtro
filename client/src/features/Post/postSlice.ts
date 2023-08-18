import { Post } from '@/models/Post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as actions from './postAction';

export interface post {
    posts: Post[];
    isLoading: boolean;
}


const initialData = {
    id: '',
    title: '',
    star: '',
    address: '',
    description:[],
    images: {
        image: [],
    },
    attributes: {
        price: '',
        acreage: '',
        published: '',
        hashtag: '',
    },
    user: {
        name: '',
        zalo: '',
        phone: '',
    },
};

let initialState: post = {
    posts: [initialData],
    isLoading: false,
};

export const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setData: (state: post, action: PayloadAction<Post[]>) => {
            return { ...state, data: action.payload };
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(actions.getPosts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(actions.getPosts.fulfilled, (state, action) => {
            // console.log(action);
            state.posts = action.payload;
            state.isLoading = false;
        });
        builder.addCase(actions.getPosts.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
});

export const { setData } = PostSlice.actions;

export default PostSlice.reducer;