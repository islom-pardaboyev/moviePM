import { useParams } from "react-router";
import { useGetSingleActorQuery } from "../../store/api/get-single-actor";
import { useGetPersonMoviesQuery } from "../../store/api/get-person-movies-api";
import { external_links, SingleActor, SingleActorMovie } from "../../utils";
import { IMG_URL } from "../../hook/useEnv";
import { usePersonExternalLinksQuery } from "../../store/api/get-person-external-links-api";
import { FaFacebook, FaLink } from "react-icons/fa";
import { BsInstagram, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";

function Person() {
  const { id } = useParams();
  const { data: person } = useGetSingleActorQuery(id) as { data: SingleActor };
  const { data: movies } = useGetPersonMoviesQuery(id) as {
    data: SingleActorMovie;
  };
  const { data: links } = usePersonExternalLinksQuery(id) as {
    data: external_links;
  };
  console.log(movies);
  const gender = ["Male", "Female"];
  if (!person || !movies || !links) {
    return <div>Loading...</div>;
  }
  return (
    <section className="container mt-10">
      {person && movies && links && (
        <div className="grid grid-cols-3">
          <div className="w-fit">
            <img
              src={`${IMG_URL}${person.profile_path}`}
              width={300}
              className="rounded-lg"
              alt=""
            />
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
              <div className="flex flex-col mt-5 gap-5">
                <div className="flex flex-col">
                  <b>Known for</b>
                  <span>{person.known_for_department}</span>
                </div>
                <div className="flex flex-col">
                  <b>Known Credits</b>
                  <span>{movies.cast.length}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      )}
    </section>
  );
}

export default Person;
