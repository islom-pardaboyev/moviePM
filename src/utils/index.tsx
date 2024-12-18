import { Suspense } from "react";
const Loading = () => <div>Loading...</div>;

export const SuspenseComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => <Suspense fallback={<Loading />}>{children}</Suspense>;

export type NowPlayingContext = {
  results: Movie[];
};

export const NavbarContext = [
  {
    label: "My Watchlist",
    path: "/watchlist",
    badge: true,

  },
];

export type Movie = {
  adult: false;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SingleMovieContext = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type PeopleContext = {
  id: number;
  cast: SinglePeople[];
  crew: SinglePeople[];
};

export type SinglePeople = {
  job?: string;
  adult: false;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type SearchMovieList = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
};

export type SingleActor = {
  adult: false;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: null | string;
  gender: number;
  homepage: string | null;
  id: number;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};

export type SingleActorMovie = {
  id: number;
  cast: {
    adult: false;
    backdrop_path: string;
    character: string;
    credit_id: string;
    department: string;
    genre_ids: number[];
    id: number;
    job: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  crew: {adult: false, backdrop_path: string, credit_id: string, department: string, genre_ids: number[], id: number, job: string, original_language: string, original_title: string, overview: string, popularity: number, poster_path: string, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number}[]
};
export type external_links = {
  facebook_id: null | string;
  instagram_id: null | string;
  twitter_id: null | string;
  tiktok_id: null | string;
  wikidata_id: null | string;
  youtube_id: null | string;
}