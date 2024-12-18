import { useNavigate, useParams } from "react-router";
import { IMG_URL } from "../../hook/useEnv";
import { useGetMovieByIdQuery } from "../../store/api/get-movie-by-id-api";
import { Movie, PeopleContext } from "../../utils";
import { useGetMovieActorsQuery } from "../../store/api/get-movie-actors-api";
import ActorsCard from "../../components/actors_card/ActorsCard";
import { LuMoveLeft } from "react-icons/lu";

function Actors() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: actors, isLoading } = useGetMovieActorsQuery(id) as {
    data: PeopleContext;
    isLoading: boolean;
  };
  const { data: movie } = useGetMovieByIdQuery(id) as { data: Movie };
  if (isLoading) {
    return (
      <div>
        <div className="relative h-32 animate-pulse">
          <div className="object-cover absolute top-0 left-0 w-full h-full bg-gray-200"></div>
          <div className="absolute top-0 left-0 bg-black/70 backdrop-blur-md w-full h-full flex items-center ">
            <div className="container flex gap-4 ">
              <div className="h-15 w-15 bg-gray-200"></div>
              <div>
                <div className="h-6 bg-gray-200 rounded mb-1 w-1/4"></div>
                <div className="flex text-[#9AA6B2] cursor-pointer items-center gap-2">
                  <div className="h-4 bg-gray-200 rounded w-10"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-32 animate-pulse">
          <div className="object-cover absolute top-0 left-0 w-full h-full bg-gray-200"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center">
            <div className="container flex gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded"></div>
              <div>
                <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  document.title = movie?.title;
  return (
    <section>
      {actors && movie && (
        <div>
          <div className="relative h-32">
            <img
              src={`${IMG_URL}${movie.backdrop_path}`}
              className="object-cover absolute top-0 left-0 w-full h-full"
              alt="Movie Backdrop"
            />
            <div className="absolute top-0 left-0 bg-black/70 backdrop-blur-md w-full h-full flex items-center ">
              <div className="container flex gap-4 ">
                <img src={`${IMG_URL}${movie.poster_path}`} width={60} alt="" />
                <div>
                  <span className="text-white font-bold text-2xl">
                    {movie.title}
                  </span>
                  <span
                    onClick={() => navigate(-1)}
                    className="flex text-[#9AA6B2] cursor-pointer items-center gap-2"
                  >
                    <LuMoveLeft color="#9AA6B2" />
                    <p>Back to main</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5 grid grid-cols-2 gap-10">
            <div className="col-span-1">
              <h1 className="flex items-center mb-5 gap-2 text-xl">
                <p className="font-medium">Cast</p>{" "}
                <span>{actors.cast.length}</span>
              </h1>
              <div className="flex flex-col ">
                {actors.cast.map((actor, inx) => (
                  <ActorsCard actor={actor} key={inx} />
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="flex items-center gap-2 text-xl">
                <p className="font-medium">Crew</p>
                <span>{actors.crew.length}</span>
              </h1>

              <div className="flex flex-col gap-5">
                <div>
                  {actors.crew.some(
                    (crew) => crew.known_for_department === "Art"
                  ) && <h1 className="font-bold">Art</h1>}
                  {actors.crew
                    .filter((crew) => crew.known_for_department === "Art")
                    .map((actor, inx) => (
                      <ActorsCard actor={actor} key={inx} />
                    ))}
                </div>
                <div>
                  {actors.crew.some(
                    (crew) => crew.known_for_department === "Camera"
                  ) && <h1 className="font-bold">Camera</h1>}
                  {actors.crew
                    .filter((crew) => crew.known_for_department === "Camera")
                    .map((actor, inx) => (
                      <ActorsCard actor={actor} key={inx} />
                    ))}
                </div>
                <div>
                  {actors.crew.some(
                    (crew) => crew.known_for_department === "Sound"
                  ) && <h1 className="font-bold">Sound</h1>}
                  {actors.crew
                    .filter((crew) => crew.known_for_department === "Sound")
                    .map((actor, inx) => (
                      <ActorsCard actor={actor} key={inx} />
                    ))}
                </div>
                <div>
                  {actors.crew.some(
                    (crew) => crew.known_for_department === "Camera"
                  ) && <h1 className="font-bold">Camera</h1>}
                  {actors.crew
                    .filter((crew) => crew.known_for_department === "Camera")
                    .map((actor, inx) => (
                      <ActorsCard actor={actor} key={inx} />
                    ))}
                </div>
                <div>
                  {actors.crew.some(
                    (crew) => crew.known_for_department === "Production"
                  ) && <h1 className="font-bold">Production</h1>}
                  {actors.crew
                    .filter(
                      (crew) => crew.known_for_department === "Production"
                    )
                    .map((actor, inx) => (
                      <ActorsCard actor={actor} key={inx} />
                    ))}
                </div>
                <div>
                  {actors.crew.some(
                    (crew) => crew.known_for_department === "Crew"
                  ) && <h1 className="font-bold">Crew</h1>}
                  {actors.crew
                    .filter((crew) => crew.known_for_department === "Crew")
                    .map((actor, inx) => (
                      <ActorsCard actor={actor} key={inx} />
                    ))}
                </div>
                <div>
                  {actors.crew.some(
                    (crew) => crew.known_for_department === "Lighting"
                  ) && <h1 className="font-bold">Lighting</h1>}
                  {actors.crew
                    .filter((crew) => crew.known_for_department === "Lighting")
                    .map((actor, inx) => (
                      <ActorsCard actor={actor} key={inx} />
                    ))}
                </div>
                <div>
                  {actors.crew.some(
                    (crew) => crew.known_for_department === "Directing"
                  ) && <h1 className="font-bold">Directing</h1>}
                  {actors.crew
                    .filter((crew) => crew.known_for_department === "Directing")
                    .map((actor, inx) => (
                      <ActorsCard actor={actor} key={inx} />
                    ))}
                </div>
                <div>
                  {actors.crew.some(
                    (crew) => crew.known_for_department === "Visual Effects"
                  ) && <h1 className="font-bold">Visual Effects</h1>}
                  {actors.crew
                    .filter(
                      (crew) => crew.known_for_department === "Visual Effects"
                    )
                    .map((actor, inx) => (
                      <ActorsCard actor={actor} key={inx} />
                    ))}
                </div>
                <div>
                  {actors.crew.some(
                    (crew) => crew.known_for_department === "Writing"
                  ) && <h1 className="font-bold">Writing</h1>}
                  {actors.crew
                    .filter((crew) => crew.known_for_department === "Writing")
                    .map((actor, inx) => (
                      <ActorsCard actor={actor} key={inx} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Actors;
