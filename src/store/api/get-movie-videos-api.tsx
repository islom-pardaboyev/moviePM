import { api } from ".";
import { API_KEY } from "../../hook/useEnv";

export const getMovieVideosById = api.injectEndpoints({
    endpoints: (builder) => ({
        getMovieVideos: builder.query({
            query: (id) => ({
                url: `/movie/${id}/videos?language=en-US?api_key=${API_KEY}`,
            }),
        }),
    }),
})

export const {useGetMovieVideosQuery} = getMovieVideosById