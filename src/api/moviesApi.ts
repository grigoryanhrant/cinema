import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MovieType} from "../common/types";

export const moviesApi = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getFeaturedMovie: builder.query({
            query: () => `featured`,
        }),
        getTendingNowMovies: builder.query<MovieType[], string>({
            query: () => `tendingNow`,
        }),
    }),
});


export const {
    useGetFeaturedMovieQuery,
    useGetTendingNowMoviesQuery
} = moviesApi;