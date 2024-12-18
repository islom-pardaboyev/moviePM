import FilmCard from "../../components/film_card/FilmCard";
import { useGetWatchlistMoviesQuery } from "../../store/api/get-watchlist-movies-api";
import { Movie } from "../../utils";

function Watchlist() {
  const { data, isLoading } = useGetWatchlistMoviesQuery(true) as {
    data: { results: Movie[] };
    isLoading: boolean;
  };
  document.title = "Watchlist";
  if (isLoading) {
    return (
      <section className="container">
        <div className="grid grid-cols-5 gap-5 mt-5 animate-pulse">
          <div className="h-60 bg-gray-200 rounded"></div>
          <div className="h-60 bg-gray-200 rounded"></div>
          <div className="h-60 bg-gray-200 rounded"></div>
          <div className="h-60 bg-gray-200 rounded"></div>
          <div className="h-60 bg-gray-200 rounded"></div>
        </div>
      </section>
    );
  }
  return (
    <section className="container">
      <div className="grid grid-cols-5 gap-5 mt-5">
        {data &&
          data.results.map((movie, inx) => (
            <FilmCard movie={movie} key={inx} />
          ))}
      </div>
    </section>
  );
}

export default Watchlist;
