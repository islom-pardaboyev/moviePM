import { api } from ".";
import { API_KEY } from "../../hook/useEnv";

export const getPersonMovies = api.injectEndpoints({
    endpoints: (builder) => ({
        getPersonMovies: builder.query({
            query: (id) => ({
                url: `person/${id}/movie_credits?api_key=${API_KEY}`
            }),
        }),
    }),
})

export const {useGetPersonMoviesQuery} = getPersonMovies