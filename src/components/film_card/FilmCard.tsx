import { useNavigate } from "react-router";
import { IMG_URL } from "../../hook/useEnv";
import { Movie } from "../../utils";

function FilmCard({ movie }: { movie: Movie }) {
  const navigate = useNavigate();
  return (
    <div className="min-w-[250px] cursor-pointer min-h-[350px] border border-gray-200 rounded-lg overflow-hidden ">
      <div
        onClick={() => navigate(`/movies/${movie.id}`)}
        className="relative overflow-hidden"
      >
        <img
          src={`${IMG_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover rounded-t-lg hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex items-center gap-5 justify-between">
        <p className="text-lg font-semibold text-gray-800 truncate">
          {movie.title}
        </p>
      </div>
    </div>
  );
}

export default FilmCard;
