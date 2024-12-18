import { useGetNowPlayingMoviesQuery } from "../../store/api/get-now-playing-movies"; 
import { NowPlayingContext } from "../../utils";
import FilmCard from "../film_card/FilmCard";

function TrendingNow() {
  const { data, isLoading } = useGetNowPlayingMoviesQuery(1) as {
    data: NowPlayingContext;
    isLoading: boolean;
  };
  return (
    <section className="container">
      <h1 className="font-bold text-3xl">Trending Now</h1>
      <div className="flex overflow-x-auto gap-3 mt-5">
        {isLoading &&
          Array.from({ length: 5 }).map((_, inx) => (
            <div
              key={inx}
              className="min-w-[250px] min-h-[300px] border-2 overflow-hidden rounded-lg animate-pulse"
            >
              <div className="h-full w-full bg-gray-200"></div>
              <div className="flex items-center mt-2 px-4">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}

        {data &&
          data.results.map((movie, inx: number) => (
            <FilmCard movie={movie} key={inx}/>
          ))}
      </div>
    </section>
  );
}

export default TrendingNow;
