import { useParams } from "react-router";
import { useGetMovieByIdQuery } from "../../store/api/get-movie-by-id-api";
import { PeopleContext, SingleMovieContext } from "../../utils";
import { IMG_URL } from "../../hook/useEnv";
import { useGetMovieActorsQuery } from "../../store/api/get-movie-actors-api";
import { ArrowRight } from "lucide-react";

const getRatingColor = (rating: number) => {
  if (rating > 7) return "bg-green-500";
  if (rating > 5) return "bg-yellow-500";
  return "bg-red-500";
};

function SingleMovie() {
  const { id } = useParams();
  const { data, isLoading } = useGetMovieByIdQuery(id) as {
    data: SingleMovieContext;
    isLoading: boolean;
  };
  const { data: actors } = useGetMovieActorsQuery(id) as {
    data: PeopleContext;
  };
  console.log(actors);
  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      {data && actors && (
        <div>
          <div className="w-full h-[85vh] relative">
            <div className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-black h-full w-full"></div>
            <img
              src={`${IMG_URL}${data.backdrop_path}`}
              className="w-full h-full object-cover"
              alt="Movie backdrop"
            />
            <div className="absolute bottom-1/4  text-white w-full">
              <div className="flex container items-center space-x-5">
                <img
                  src={`${IMG_URL}${data.poster_path}`}
                  className="rounded-lg"
                  width={300}
                  alt=""
                />
                <div className="flex flex-col justify-between space-y-4">
                  <div>
                    <h1 className="text-2xl font-bold">{data.title}</h1>
                    <p className="italic text-gray-400">{data.tagline}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span>{data.release_date.split("-").join("/")}</span>
                      <span>•</span>
                      <span>
                        {data.genres.map((genre) => genre.name).join(", ")}
                      </span>
                      <span>•</span>
                      <span>{data.runtime} min</span>
                    </div>
                  </div>
                  <p className="w-[50vw] italic">{data.overview}</p>

                  <div className="w-[20vw] h-6 border-2 rounded-full overflow-hidden border-gray-300 bg-gray-100 shadow-lg">
                    <div
                      style={{
                        width: `${Number(data.vote_average.toFixed(2)) * 10}%`,
                      }}
                      className={`h-full ${getRatingColor(
                        Number(data.vote_average.toFixed(2)) * 10
                      )} text-white font-bold text-sm flex items-center justify-center transition-all duration-500 ease-in-out`}
                    >
                      {Number(data.vote_average.toFixed(2)) * 10}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-10">
            <h1 className="capitalize text-3xl font-bold text-gray-800 mb-5">
              Actors
            </h1>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-10">
                <div className="flex items-center overflow-x-auto gap-5 py-4">
                  {actors.cast.slice(0, 10).map((actor, inx) => (
                    <div
                      key={inx}
                      className="min-w-[200px] border border-transparent rounded-lg overflow-hidden bg-gray-800 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <img
                        src={`${IMG_URL}${actor.profile_path}`}
                        className="w-full h-[300px] object-cover"
                        onError={(e) =>
                          (e.currentTarget.src =
                            "https://placehold.co/600x400?text=No+Image")
                        }
                        alt={actor.original_name}
                      />
                      <div className="p-3 bg-gray-900 text-white text-center">
                        <p className="text-lg font-semibold">
                          {actor.original_name}
                        </p>
                        <p className="text-sm italic">{actor.character}</p>
                      </div>
                    </div>
                  ))}
                  <div className="min-w-fit">
                    <b className="flex items-center cursor-pointer flex-col hover:text-black/60">Show more  <ArrowRight className="hover:text-black/60" /></b>
                  </div>
                </div>
              </div>
              <div className="col-span-2"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SingleMovie;
