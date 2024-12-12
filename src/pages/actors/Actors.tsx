import { useNavigate, useParams } from "react-router";
import { IMG_URL } from "../../hook/useEnv";
import { useGetMovieByIdQuery } from "../../store/api/get-movie-by-id-api";
import { Movie, PeopleContext } from "../../utils";
import { useGetMovieActorsQuery } from "../../store/api/get-movie-actors-api";
import ActorsCard from "../../components/actors_card/ActorsCard";
import { CgMoveLeft } from "react-icons/cg";

function Actors() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: actors } = useGetMovieActorsQuery(id) as {
    data: PeopleContext;
  };
  const { data: movie } = useGetMovieByIdQuery(id) as { data: Movie };
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
                    <CgMoveLeft color="#9AA6B2" />
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
