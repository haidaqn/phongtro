import axiosClient from './axiosClient';

const postsApi = {
    getAll() {
        const url = 'post/all-post';
        return axiosClient.get(url);
    },
    getLimit(page: number) {
        const url = `post/limit?page=${page}`;
        return axiosClient.get(url);
    },
};

export default postsApi;
