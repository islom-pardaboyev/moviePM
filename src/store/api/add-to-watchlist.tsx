import { api } from ".";

export const addToWatchlist = api.injectEndpoints({
    endpoints: (builder) => ({
        addToWatchlist: builder.mutation({
            query: (body) => ({
                url: `/account/21478459/watchlist`,
                method: 'POST',
                body
            }),
            invalidatesTags: [{type: 'movie'}]
        }),
    }),
})

export const {useAddToWatchlistMutation} = addToWatchlist