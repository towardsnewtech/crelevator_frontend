import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { authSlice } from './slices/authSlice';
import { settingSlice } from './slices/settingSlice';

const makeStore = () =>
    configureStore({
        reducer: {
            [authSlice.name]: authSlice.reducer,
            [settingSlice.name]: settingSlice.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);