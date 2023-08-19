import axiosClient from './axiosClient';

const categoryApis = {
    getAll() {
        const url = 'category/all';
        return axiosClient.get(url);
    }
}

export default categoryApis;