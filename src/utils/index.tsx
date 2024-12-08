import { Suspense } from "react";

const Loading = () => <div>Loading...</div>;

export const SuspenseComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => <Suspense fallback={<Loading />}>{children}</Suspense>;

export const NavbarContext = [
  {
    label: "Movies",
    path: "/movies",
  },
  {
    label: "TV Shows",
    path: "",
  },
  {
    label: "My Watchlist",
    path: "",
  },
];

export type NowPlayingContext = {
  results: Movie[]
};

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
