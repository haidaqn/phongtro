import axiosClient from './axiosClient';
import axios from 'axios';
interface data {
    query: {};
}
interface PostData {
    categoryCode: string;
    title: string;
    priceNumber: string;
    areaNumber: string;
    images: string[];
    address: string;
    priceCode: number;
    areaCode: string;
    description: string;
    target: string;
    provinceCode: string;
    userId: string;
    label: string;
}
const postsApi = {
    getAll() {
        const url = 'post/all-post';
        return axiosClient.get(url);
    },
    getLimit(data: data) {
        return axiosClient({
            method: 'get',
            url: `post/limit`,
            params: data.query,
        });
    },
    getUploadImages(images: FormData) {
        const url = `https://api.cloudinary.com/v1_1/drussspqf/image/upload`;
        return axios.post(url, images);
    },
    getNewPost(data: PostData) {
        const url = '';
        return axiosClient.post(url);
    },
};

export default postsApi;
