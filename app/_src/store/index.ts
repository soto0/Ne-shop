import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { signInAPI } from '@src/services/signin';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

const reducer = combineReducers({
    [signInAPI.reducerPath]: signInAPI.reducer
});

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) => getDefaultMiddleware().concat(signInAPI.middleware)
});

export type TypeRootState = ReturnType<typeof store.getState>;
