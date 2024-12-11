import { useNavigate } from "react-router";
import { IMG_URL } from "../../hook/useEnv";
import { useGetNowPlayingMoviesQuery } from "../../store/api/get-now-playing-movies"; 
import { NowPlayingContext } from "../../utils";

function TrendingNow() {
  const { data, isLoading } = useGetNowPlayingMoviesQuery(1) as {
    data: NowPlayingContext;
    isLoading: boolean;
  };
  const navigate = useNavigate()
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
            <div onClick={() => navigate(`/movies/${movie.id}`)}
              key={inx}
              className="min-w-[250px] cursor-pointer min-h-[350px] border border-gray-200 rounded-lg overflow-hidden "
            >
              <div className="relative  overflow-hidden">
                <img
                  src={`${IMG_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-t-lg hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800 truncate">
                  {movie.title}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default TrendingNow;
