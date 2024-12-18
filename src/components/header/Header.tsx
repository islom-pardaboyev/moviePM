import { Link, useNavigate } from "react-router";
import { Movie, NavbarContext, SearchMovieList } from "../../utils";
import { AutoComplete, Badge } from "antd";
import { useState } from "react";
import { useSearchMovieQuery } from "../../store/api/search-movie-api";
import { useGetWatchlistMoviesQuery } from "../../store/api/get-watchlist-movies-api";

function Header() {
  const navigate = useNavigate();
  const [searchedText, setSearchedtext] = useState<string>("");
  const { data: watchlistMovies } = useGetWatchlistMoviesQuery(true) as {
    data: { results: Movie[] };
  };
  const { data } = useSearchMovieQuery(searchedText) as {
    data: SearchMovieList;
  };
  const [options, setOptions] = useState<{ value: number; label: string }[]>();
  const handleChange = (e: string) => {
    if (e) {
      setSearchedtext(e);
      const result = data.results.map((movie) => ({
        value: movie.id,
        label: movie.title,
      }));
      setOptions(result);
    }
  };
  const handleChooseMovie = (_: string, b: { value: number }) => {
    navigate(`/movies/${b.value}`);
  };
  return (
    <header className="py-3 border-b">
      {watchlistMovies && (
        <div className="container flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">
            MoviePM
          </a>
          <nav className="text-sm font-medium">
            {NavbarContext.map((item, inx) => (
              <Link key={inx} to={item.path}>
                {item.badge && (
                  <Badge count={watchlistMovies.results.length}>
                    {item.label}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-x-2">
            <AutoComplete
              onSearch={handleChange}
              allowClear
              options={options}
              onSelect={handleChooseMovie}
              style={{ width: 300 }}
              placeholder="Search movies"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
