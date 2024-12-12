import { api } from ".";
import { API_KEY } from "../../hook/useEnv";

export const personExternalLinks = api.injectEndpoints({
  endpoints: (builder) => ({
    personExternalLinks: builder.query({
      query: (id) => ({
        url: `person/${id}/external_ids?api_key=${API_KEY}`,
      }),
    }),
  }),
});

export const { usePersonExternalLinksQuery } = personExternalLinks;
