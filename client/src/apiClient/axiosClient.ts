import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
    (config) => {
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
