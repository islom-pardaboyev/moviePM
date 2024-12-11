import { api } from ".";
import { API_KEY } from "../../hook/useEnv";

export const searchMovie = api.injectEndpoints({
    endpoints: (builder) => ({
        searchMovie: builder.query({
            query: (text) => ({
                url: `/search/movie?query=${text}&include_adult=false&api_key=${API_KEY}`,
            }),
        }),
    }),
})
export const {useSearchMovieQuery} = searchMovie