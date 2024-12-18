import { api } from ".";
import { API_KEY } from "../../hook/useEnv";

export const getMovieActors = api.injectEndpoints({
    endpoints: (builder) => ({
        getMovieActors: builder.query({
            query: (id) => ({
                url: `/movie/${id}/credits?language=en-US?api_key=${API_KEY}`,
            }),
        }),
    }),
})

export const {useGetMovieActorsQuery} = getMovieActors