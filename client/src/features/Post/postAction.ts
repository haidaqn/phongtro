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
        categoryCode?: string | null;
        priceCode?: string | null;
        areaCode?: string | null;
        provinceCode?: string | null;
    };
}
export const getPosts = createAsyncThunk('app/post', async (data, { rejectWithValue }) => {
    const response: unknown = await postsApi.getAll();
    const responseCover: responseData = response as responseData;
    if (responseCover?.err) return rejectWithValue(responseCover);
    return responseCover.data;
});

export const getPostLimit = createAsyncThunk('app/post', async (data: data, { rejectWithValue }) => {
    const { page, priceCode, areaCode, categoryCode, provinceCode } = data.query;
    if (categoryCode) {
        if (provinceCode) {
            if (priceCode && areaCode) {
                const response: unknown = await postsApi.getLimit({
                    query: { page, priceCode, areaCode, provinceCode, categoryCode },
                });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            } else if (!priceCode && areaCode) {
                const response: unknown = await postsApi.getLimit({
                    query: { page, areaCode, provinceCode, categoryCode },
                });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            } else if (priceCode && !areaCode) {
                const response: unknown = await postsApi.getLimit({
                    query: { page, priceCode, provinceCode, categoryCode },
                });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            } else {
                const response: unknown = await postsApi.getLimit({ query: { page, provinceCode, categoryCode } });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            }
        } else {
            if (priceCode && areaCode) {
                const response: unknown = await postsApi.getLimit({
                    query: { page, priceCode, areaCode, categoryCode },
                });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            } else if (!priceCode && areaCode) {
                const response: unknown = await postsApi.getLimit({ query: { page, areaCode, categoryCode } });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            } else if (priceCode && !areaCode) {
                const response: unknown = await postsApi.getLimit({ query: { page, priceCode, categoryCode } });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            } else {
                const response: unknown = await postsApi.getLimit({ query: { page, categoryCode } });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            }
        }
    } else {
        if (provinceCode) {
            if (priceCode && areaCode) {
                const response: unknown = await postsApi.getLimit({
                    query: { page, priceCode, areaCode, provinceCode },
                });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            } else if (!priceCode && areaCode) {
                const response: unknown = await postsApi.getLimit({ query: { page, areaCode, provinceCode } });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            } else if (priceCode && !areaCode) {
                const response: unknown = await postsApi.getLimit({ query: { page, priceCode, provinceCode } });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            } else {
                const response: unknown = await postsApi.getLimit({ query: { page, provinceCode } });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            }
        } else {
            if (priceCode && areaCode) {
                const response: unknown = await postsApi.getLimit({ query: { page, priceCode, areaCode } });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            } else if (!priceCode && areaCode) {
                const response: unknown = await postsApi.getLimit({ query: { page, areaCode } });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            } else if (priceCode && !areaCode) {
                const response: unknown = await postsApi.getLimit({ query: { page, priceCode } });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            } else {
                const response: unknown = await postsApi.getLimit({ query: { page } });
                const responseCover: responseData = response as responseData;
                if (responseCover?.err) return rejectWithValue(responseCover);
                return { ...responseCover.data, type: data.query };
            }
        }
    }
});
