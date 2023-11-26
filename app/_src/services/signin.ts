import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISignIn } from '../models/ISignIn';
import { IUser } from '../models/IUser';

export const signInAPI = createApi({
    reducerPath: 'signInAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.URL }),
    endpoints: (build) => ({
        signIn: build.mutation<IUser, ISignIn>({
            query: (item) => ({
                url: 'signin',
                method: 'POST',
                body: item
            }),
            transformResponse: (response: IUser) => {
                return response;
            }
        })
    })
});
