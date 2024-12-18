import { api } from ".";

export const getWatchlistMovies = api.injectEndpoints({
  endpoints: (builder) => ({
    getWatchlistMovies: builder.query({
      query: () => ({
        url: `/account/21478459/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc`,
      }),
      providesTags: [{ type: "movie" }],
    }),
  }),
});
export const { useGetWatchlistMoviesQuery } = getWatchlistMovies;
