import { useNavigate, useParams } from "react-router";
import { useGetSingleActorQuery } from "../../store/api/get-single-actor";
import { useGetPersonMoviesQuery } from "../../store/api/get-person-movies-api";
import { external_links, SingleActor, SingleActorMovie } from "../../utils";
import { IMG_URL } from "../../hook/useEnv";
import { usePersonExternalLinksQuery } from "../../store/api/get-person-external-links-api";
import { FaFacebook, FaLink } from "react-icons/fa";
import { BsInstagram, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";
import { useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { FcMinus } from "react-icons/fc";
import Zoom from "react-medium-image-zoom";

function Person() {
  const navigate = useNavigate();
  const [biographyShow, setBiographyShow] = useState(false);
  const { id } = useParams();
  const { data: person } = useGetSingleActorQuery(id) as { data: SingleActor };
  const { data: movies } = useGetPersonMoviesQuery(id) as {
    data: SingleActorMovie;
  };
  const { data: links } = usePersonExternalLinksQuery(id) as {
    data: external_links;
  };
  const gender = ["Female", "Male"];

  const months = [
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
  ];
  function personAge(birthday: string) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  function personBirthday(birthday: string) {
    const birthDate = new Date(birthday);
    return `${
      months[birthDate.getMonth() + 1]
    } ${birthDate.getDate()}, ${birthDate.getFullYear()}`;
  }

  if (!person || !movies || !links) {
    return (
      <div className="container">
        <div className="grid grid-cols-4 gap-5">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-200 rounded-lg"></div>
            <div className="flex justify-start gap-3 mt-5 items-center">
              <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
              <div className="block h-5 w-px bg-gray-700"></div>
              <div className="flex justify-between items-center">
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="mt-5">
              <div className="h-6 bg-gray-200 rounded w-32"></div>
              <div className="flex text-sm flex-col mt-5 gap-5">
                <div className="flex flex-col">
                  <div className="h-5 bg-gray-200 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
                </div>
                <div className="flex flex-col">
                  <div className="h-5 bg-gray-200 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
                </div>
                <div className="flex flex-col">
                  <div className="h-5 bg-gray-200 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
                </div>
                <div className="flex flex-col">
                  <div className="h-5 bg-gray-200 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
                </div>
                <div className="flex flex-col">
                  <div className="h-5 bg-gray-200 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-5 bg-gray-200 rounded w-24"></div>
                  <div className="flex flex-col gap-3">
                    <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-1/2"></div>
            <div className="mt-8">
              <div className="h-16 bg-gray-200 rounded w-full mt-1"></div>
              <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mt-1"></div>
            </div>
            <div className="mt-10">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
              <div className="flex overflow-x-auto gap-3">
                <div className="min-w-[150px] h-36 bg-gray-200 rounded-md mr-3"></div>
                <div className="min-w-[150px] h-36 bg-gray-200 rounded-md mr-3"></div>
                <div className="min-w-[150px] h-36 bg-gray-200 rounded-md mr-3"></div>
              </div>
            </div>
            <div className="mt-10">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
              <div className="border rounded-lg space-y-5 shadow-lg p-10">
                <div className="flex gap-5 items-start">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  document.title = person?.name;
  return (
    <section className="container mt-10">
      {person && movies && links && (
        <div className="grid grid-cols-4">
          <div>
            <Zoom>
              <img
                src={`${IMG_URL}${person.profile_path}`}
                width={300}
                className="rounded-lg"
                alt=""
              />
            </Zoom>
            <div className="flex justify-start gap-3 mt-5 items-center">
              {links.facebook_id && (
                <a
                  target="_blank"
                  href={`https://www.facebook.com/groups/${links.facebook_id}`}
                >
                  <FaFacebook size={25} />
                </a>
              )}
              {links.instagram_id && (
                <a
                  target="_blank"
                  href={`https://www.instagram.com/${links.instagram_id}`}
                >
                  <BsInstagram size={25} />
                </a>
              )}
              {links.tiktok_id && (
                <a
                  target="_blank"
                  href={`https://www.instagram.com/${links.instagram_id}`}
                >
                  <BsTiktok size={25} />
                </a>
              )}
              {links.twitter_id && (
                <a target="_blank" href={`https://x.com/${links.twitter_id}`}>
                  <BsTwitter size={25} />
                </a>
              )}
              {links.youtube_id && (
                <a
                  target="_blank"
                  href={`https://www.youtube.com/@${links.youtube_id}`}
                >
                  <BsYoutube size={25} />
                </a>
              )}
              {person.homepage && (
                <span className="block h-5 w-px bg-gray-700"></span>
              )}
              {person.homepage && (
                <div className="flex justify-between items-center">
                  <a target="_blank" href={person.homepage}>
                    <FaLink size={25} />
                  </a>
                </div>
              )}
            </div>
            <div className="mt-5">
              <p className="font-medium text-xl">Personal Info</p>
              <div className="flex text-sm flex-col mt-5 gap-5">
                <div className="flex flex-col">
                  <b>Known for</b>
                  <span>{person.known_for_department}</span>
                </div>
                <div className="flex flex-col">
                  <b>Known Credits</b>
                  <span>{movies.cast.length + movies.crew.length}</span>
                </div>
                <div className="flex flex-col">
                  <b>Gender</b>
                  <span>{person.gender === 1 ? gender[0] : gender[1]}</span>
                </div>
                <div className="flex flex-col">
                  <b>Birthday</b>
                  <div>
                    {personBirthday(person.birthday)} (
                    {personAge(person.birthday)} years old)
                  </div>
                </div>
                <div className="flex flex-col">
                  <b>Place of Birth</b>
                  <div>{person.place_of_birth}</div>
                </div>
                {person.also_known_as.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <b>Also Known As</b>
                    <div className="flex flex-col gap-3">
                      {person.also_known_as.map((item, inx) => (
                        <p key={inx}>{item}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <h1 className="font-bold text-3xl">{person.name}</h1>
            <div className="mt-8">
              {person.biography && (
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Biography</p>
                  <p className={` ${biographyShow ? "" : "line-clamp-6"}`}>
                    {person.biography}
                  </p>
                  <p
                    onClick={() => setBiographyShow(true)}
                    className={`cursor-pointer flex items-center justify-end ${
                      biographyShow ? "hidden" : ""
                    } text-sky-500 fon-medium capitalize`}
                  >
                    Read More <FaAnglesRight />
                  </p>
                </div>
              )}
              <div className="mt-10">
                <p className="font-semibold mb-3">Known For</p>
                <div className="flex overflow-x-auto gap-3">
                  {movies.cast
                    .filter((movie) => movie.poster_path)
                    .map((movie, inx) => (
                      <div
                        key={inx}
                        className="min-w-[150px]"
                        onClick={() => navigate(`/movies/${movie.id}`)}
                      >
                        <img
                          src={`${IMG_URL}${movie.poster_path}`}
                          className="rounded-lg w-[150px] object-cover"
                          alt=""
                        />
                        <p className="text-center text-sm line-clamp-2 cursor-pointer hover:text-sky-500 mt-2">
                          {movie.original_title}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="font-semibold mb-3">Acting</p>
                <div className="border rounded-lg space-y-5 shadow-lg p-10">
                  {movies.cast
                    .filter((movie) => movie.id)
                    .sort((a, b) =>
                      b.release_date.localeCompare(a.release_date)
                    )
                    .map((movie, inx) => (
                      <div key={inx} className="flex gap-5 items-start">
                        <div className="flex items-center gap-5">
                          <p>
                            {Number() <= new Date().getFullYear() ? (
                              movie.release_date.split("-")[0]
                            ) : (
                              <FcMinus />
                            )}
                          </p>
                          <GoDot />
                        </div>
                        <div className="text-sm">
                          <p
                            onClick={() => navigate(`/movies/${movie.id}`)}
                            className="font-semibold cursor-pointer hover:text-sky-500"
                          >
                            {movie.original_title}
                          </p>
                          {movie.character && (
                            <p className="ml-3">
                              <span className="text-gray-400">as</span>{" "}
                              <span>{movie.character}</span>
                            </p>
                          )}
                        </div>
                      </div>
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

export default Person;
