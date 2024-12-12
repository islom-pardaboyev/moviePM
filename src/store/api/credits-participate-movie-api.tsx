import { api } from ".";

export const creditsMovieParticipate = api.injectEndpoints({
    endpoints: (builder) => ({
        creditsMovieParticipate: builder.query({
            query: (id) => ({
                url: `/person/${id}/movie_credits?language=en-US`,
            }),
        }),
    }),
})
export const {useCreditsMovieParticipateQuery} = creditsMovieParticipate