import { LoginForm, RegisterForm } from '@/models/Auth';
import axiosClient from './axiosClient';

const authApi = {
    login(data: LoginForm) {
        const url = '/auth/login';
        return axiosClient.post(url, data);
    },
    register(data: RegisterForm) {
        const url = 'auth/register';
        return axiosClient.post(url, data);
    },
    getHello() {
        const url = 'auth/verifyToken';
        return axiosClient.get(url);
    },
};

export default authApi;
