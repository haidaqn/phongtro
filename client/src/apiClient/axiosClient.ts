import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import StorageKeys from '@/constants/storage-keys';
const axiosClient = axios.create({
    baseURL: `${StorageKeys.SERVER_API}`,
    headers: {
        'Content-Type': 'application/json',
    },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },

    (error) => {
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        return response?.data;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default axiosClient;
