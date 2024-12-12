import { api } from ".";
import { API_KEY } from "../../hook/useEnv";

export const singleActor = api.injectEndpoints({
    endpoints: (builder) => ({
        getSingleActor: builder.query({
            query: (id) => ({
                url: `person/${id}?api_key=${API_KEY}`,
            }),
        }),
    }),
})

export const {useGetSingleActorQuery} = singleActor