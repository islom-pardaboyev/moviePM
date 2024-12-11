import { api } from ".";

export const creditsMovieParticipate = api.injectEndpoints({
    endpoints: (builder) => ({
        creditsMovieParticipate: builder.query({
            query: (id) => ({
                url: `3/person/${id}/movie_credits?language=en-US`,
            }),
        }),
    }),
})
export const {useCreditsMovieParticipateQuery} = creditsMovieParticipate