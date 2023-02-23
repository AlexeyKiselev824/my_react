import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL_POSTS, URL_POSTS } from '../constants/api';
import { IPost } from '../models/types';

interface QueryParamState {
    limit: number;
    page: number;
}

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_POSTS }),
    tagTypes: ['Post', 'Post_id'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<{ apiResponse: IPost[], totalCount: number }, QueryParamState>({
            query: ({ limit = 5, page = 1 }) => ({
                url: URL_POSTS,
                params: { _limit: limit, _page: page }
            }),
            transformResponse(apiResponse: IPost[], meta) {
                return { apiResponse, totalCount: Number(meta?.response?.headers.get('x-total-count')) }
            },
            providesTags: ['Post']
        }),
        getPostById: build.query<IPost, string>({
            query: (id) => ({
                url: URL_POSTS + id
            }),
            providesTags: ['Post_id']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: URL_POSTS,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: URL_POSTS + post.id,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post', 'Post_id']
        }),
        removePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: URL_POSTS + post.id,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        }),
    })
})