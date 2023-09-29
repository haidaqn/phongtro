import authApi from '@/apiClient/auth';
import StorageKeys from '@/constants/storage-keys';
import { LoginForm, RegisterForm, User } from '@/models';
import { PayloadAction } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { authActions } from './AuthSlice';
import Router from 'next/router';

type ApiResAuth = {
    status: boolean;
    message: string;
    data: User;
};
function* handleLogin(action: PayloadAction<LoginForm>) {
    try {
        const res: ApiResAuth = yield call(authApi.login, action.payload);
        if (res.status === true) {
            const user = res.data;
            yield put(authActions.loginSuccess(user));
            localStorage.setItem(StorageKeys.TOKEN, user.token);
            localStorage.setItem(StorageKeys.NAME_USER, user.name);
            localStorage.setItem(StorageKeys.PHONE_USER, user.phone);
            Router.push('/');
        } else {
            yield put(authActions.loginFailed());
            yield delay(100);
            yield put(authActions.resetAction());
        }
    } catch (error) {
        yield put(authActions.loginFailed());
        yield delay(100);
        yield put(authActions.resetAction());
    }
}
function* handleRegister(action: PayloadAction<RegisterForm>) {
    try {
        const res: ApiResAuth = yield call(authApi.register, action.payload);
        if (res.status === true) {
            const user = res.data;
            yield put(authActions.registerSuccess(user));
            localStorage.setItem(StorageKeys.TOKEN, user.token);
            localStorage.setItem(StorageKeys.NAME_USER, user.name);
            localStorage.setItem(StorageKeys.PHONE_USER, user.phone);
            Router.push('/');
        } else {
            yield put(authActions.registerFailed());
            yield delay(100);
            yield put(authActions.resetAction());
        }
    } catch (error) {
        // Handle the error here
        yield put(authActions.registerFailed());
        yield delay(100);
        yield put(authActions.resetAction());
    }
}
function* handleLogout() {
    localStorage.removeItem(StorageKeys.TOKEN);
    localStorage.removeItem(StorageKeys.NAME_USER);
    localStorage.removeItem(StorageKeys.PHONE_USER);
}

export function* authSaga() {
    yield takeLatest(authActions.login.type, handleLogin);
    yield takeLatest(authActions.register.type, handleRegister);
    yield takeLatest(authActions.logout.type, handleLogout);
}
