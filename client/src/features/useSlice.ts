import { User } from '@/models/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface user {
    data: User;
    isLoggedIn: boolean;
}

const initialData = {
    id: 0,
    name: '',
    phone:'',
};

let initialState: user = {
    data: initialData,
    isLoggedIn: false,
};

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setIsLoggedIn: (state: user, action: PayloadAction<boolean>) => {
            return { ...state, isLoggedIn: action.payload };
        },
        setData: (state: user, action: PayloadAction<User>) => {
            return { ...state, data: action.payload };
        }
    },
});

export const { setIsLoggedIn, setData } = UserSlice.actions;

export default UserSlice.reducer;