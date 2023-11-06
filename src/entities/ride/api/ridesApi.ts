import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RideListType } from '../types/types';

export const ridesApi = createApi({
    reducerPath: 'ridesApi',
    tagTypes: ['Rides'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (build) => ({
        getPostsOnPage: build.query<
            RideListType,
            { pageNum: number; limit: number }
        >({
            query: ({ pageNum, limit }) =>
                `/posts?_page=${pageNum}&_limit=${limit}`,
        }),
        getAllPosts: build.query<RideListType, string>({
            query: () => `/posts`,
        }),
    }),
});

export const { useGetPostsOnPageQuery, useGetAllPostsQuery } = ridesApi;
