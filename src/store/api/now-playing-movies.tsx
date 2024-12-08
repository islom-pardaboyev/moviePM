import { api } from ".";
import { API_KEY } from "../../hook/useEnv";

export const NowPlayingContext = api.injectEndpoints({
  endpoints: (builder) => ({
    getNowPlayingMovies: builder.query({
      query: (page) => ({
        url: `/movie/now_playing?language=en-US&page=${page}?api_key=${API_KEY}`,
      }),
    }),
  }),
});

export const { useGetNowPlayingMoviesQuery } = NowPlayingContext;