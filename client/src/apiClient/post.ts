import axiosClient from "./axiosClient";

const postsApi = {
    getAll() {
        const url = 'post/all-post';
        return axiosClient.get(url);
    }
}

export default postsApi;