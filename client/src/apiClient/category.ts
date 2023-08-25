import axiosClient from './axiosClient';

const categoryApis = {
    getAll() {
        const url = 'category/all';
        return axiosClient.get(url);
    },
    getAllS() {
        const url = 'area/all';
        return axiosClient.get(url);
    },
    getAllPrice() {
        const url = 'price/all';
        return axiosClient.get(url);
    },
};

export default categoryApis;
