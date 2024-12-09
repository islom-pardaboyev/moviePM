import { api } from ".";
import { API_KEY } from "../../hook/useEnv";

export const getMovieById = api.injectEndpoints({
  endpoints: (builder) => ({
    getMovieById: builder.query({
      query: (id) => ({
        url: `/movie/${id}?api_key=${API_KEY}`,
      }),
    }),
  }),
});

export const {useGetMovieByIdQuery} = getMovieById