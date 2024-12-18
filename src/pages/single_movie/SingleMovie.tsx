import { useNavigate, useParams } from "react-router";
import { useGetMovieByIdQuery } from "../../store/api/get-movie-by-id-api";
import { PeopleContext, SingleMovieContext } from "../../utils";
import { IMG_URL } from "../../hook/useEnv";
import { useGetMovieActorsQuery } from "../../store/api/get-movie-actors-api";
import { useGetMovieVideosQuery } from "../../store/api/get-movie-videos-api";
import YouTube from "react-youtube";
import Zoom from "react-medium-image-zoom";
import CameraOff from "../../assets/camera-off.svg";
import { useAddToWatchlistMutation } from "../../store/api/add-to-watchlist";
import { BsArrowRight } from "react-icons/bs";

const getRatingColor = (rating: number) => {
  if (rating > 70) return "bg-green-500";
  if (rating > 50) return "bg-yellow-500";
  return "bg-red-500";
};

function SingleMovie() {
  const [addToWatchlist] = useAddToWatchlistMutation()
  const handleAddWatchlist = (id: number) => {
    const data = {
      "media_type": "movie",
      "media_id": id,
      "watchlist": true
    }
    addToWatchlist(data)
  }
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetMovieByIdQuery(id) as {
    data: SingleMovieContext;
    isLoading: boolean;
  };
  const { data: actors } = useGetMovieActorsQuery(id) as {
    data: PeopleContext;
  };
  const { data: videos } = useGetMovieVideosQuery(id) as {
    data: { id: number; results: { key: string; id: string }[] };
  };
  document.title = data?.title;
  if (isLoading)
    return (
      <section className="animate-pulse">
        <div>
          <div className="w-full h-[85vh] relative">
            <div className="h-full w-full bg-gray-200"></div>
          </div>
          <div className="container mt-10">
            <div className="h-6 mb-5 bg-gray-200 rounded"></div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-9 bg-gray-200 h-20 mb-3"></div>
              <div className="col-span-3 p-5 space-y-4">
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-10 container gap-4">
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>
    );

  return (
    <section>
      {data && actors && videos && (
        <div>
          <div className="w-full h-[85vh] relative">
            <div className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-black h-full w-full"></div>
            <img
              src={`${IMG_URL}${data.backdrop_path}`}
              className="w-full h-full object-cover"
              alt="Movie backdrop"
            />
            <div className="absolute bottom-1/4  text-white w-full">
              <div className="flex container items-end space-x-5">
                <Zoom>
                  <img
                    src={`${IMG_URL}${data.poster_path}`}
                    className="rounded-lg"
                    width={300}
                    alt=""
                  />
                </Zoom>
                <div className="flex backdrop-blur-md p-5 rounded-lg border border-gray-500 flex-col justify-between space-y-4">
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
                        width: `${data.vote_average * 10}%`,
                      }}
                      className={`h-full ${getRatingColor(
                        Number(data.vote_average.toFixed(2)) * 10
                      )} text-white font-bold text-sm flex items-center justify-center transition-all duration-500 ease-in-out`}
                    >
                      {data.vote_average * 10}%
                    </div>
                  </div>
                  <button onClick={() => handleAddWatchlist(data.id)} className="float-end text-white font-bold border rounded-lg hover:bg-white hover:text-black duration-300 w-fit p-2">Add to watchlist</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-10">
            <h1 className="capitalize text-3xl font-bold text-gray-800 mb-5">
              Actors
            </h1>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-9">
                <div className="flex items-center overflow-x-auto gap-5 py-4">
                  {actors.cast.slice(0, 10).map((actor, inx) => (
                    <div onClick={() => navigate(`/person/${actor.id}`)}
                      key={inx}
                      className="min-w-[200px] border border-transparent rounded-lg overflow-hidden bg-gray-800 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <img
                        src={`${IMG_URL}${actor.profile_path}`}
                        className="w-full h-[300px] object-cover"
                        onError={(e) => (e.currentTarget.src = CameraOff)}
                        alt={actor.original_name}
                      />
                      <div className="p-3 bg-gray-900 text-white text-center">
                        <p className="text-lg font-semibold line-clamp-1">
                          {actor.original_name}
                        </p>
                        <p className="text-sm italic">{actor.character}</p>
                      </div>
                    </div>
                  ))}
                  <div className="min-w-fit">
                    <b
                      onClick={() => navigate(`/actors/${id}`)}
                      className="flex items-center cursor-pointer flex-col hover:text-black/60"
                    >
                      Show more <BsArrowRight className="hover:text-black/60" />
                    </b>
                  </div>
                </div>
              </div>
              <div className="col-span-3 flex flex-col justify-between p-5">
                <div className="flex flex-col">
                  <b>Status:</b>
                  <span>{data.status}</span>
                </div>
                <div className="flex flex-col">
                  <b>Original Language:</b>
                  <span>{data.spoken_languages[0].english_name}</span>
                </div>
                <div className="flex flex-col">
                  <b>Budget:</b>
                  <span>${data.budget.toLocaleString()}</span>
                </div>
                <div className="flex flex-col">
                  <b>Revenue:</b>
                  <span>${data.revenue.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-10 container gap-4">
            {videos.results.map((videos, inx) => (
              <div key={inx} className="w-full">
                <YouTube key={videos.id} videoId={videos.key} className="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default SingleMovie;
