import { configureStore } from '@reduxjs/toolkit';
import resultsSlice from './resultsSlice';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = () => configureStore({
    reducer: {
        results: resultsSlice,
    },
});

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>

export const wrapper = createWrapper<AppStore>(makeStore)