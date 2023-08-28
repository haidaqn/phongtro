import axiosClient from './axiosClient';

interface data {
    query: {};
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
};

export default postsApi;
