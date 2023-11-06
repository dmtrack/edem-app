import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RideListType } from '../types/types';

export const ridesApi = createApi({
    reducerPath: 'ridesApi',
    tagTypes: ['Rides'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (build) => ({
        getPostsOnPage: build.query<RideListType, string>({
            query: (page) => `/posts?_page=${page}&_limit=10`,
        }),
        getAllPosts: build.query<RideListType, string>({
            query: () => `/posts`,
        }),
    }),
});

export const { useGetPostsOnPageQuery, useGetAllPostsQuery } = ridesApi;
