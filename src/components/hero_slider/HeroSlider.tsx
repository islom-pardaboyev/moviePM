import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";
import { useGetNowPlayingMoviesQuery } from "../../store/api/get-now-playing-movies";
import { NowPlayingContext } from "../../utils";
import { IMG_URL } from "../../hook/useEnv";
import ContentLoader from "react-content-loader";
import { useNavigate } from "react-router";
import { useAddToWatchlistMutation } from "../../store/api/add-to-watchlist";



export default function HeroSlider() {
  const [addToWatchlist] = useAddToWatchlistMutation()
  const handleAddWatchlist = (id: number) => {
    const data = {
      "media_type": "movie",
      "media_id": id,
      "watchlist": true
    }
    addToWatchlist(data)
  }
  const { data, isLoading } = useGetNowPlayingMoviesQuery(1) as {
    data: NowPlayingContext;
    isLoading: boolean;
  };
  
const navigate = useNavigate();
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="h-[85vh] mb-10"
      >
        {isLoading &&
          Array.from({ length: 5 }).map((_, inx: number) => (
            <SwiperSlide
              key={inx}
              className="relative text-white animate-pulse"
            >
              <ContentLoader
                speed={2}
                viewBox="0 0 400 160"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0"  width="400" height="160" />
              </ContentLoader>
            </SwiperSlide>
          ))}
        {data &&
          data.results.slice(0, 4).map((movie, inx: number) => (
            <SwiperSlide className="relative text-white" key={inx}>
              <div className="absolute top-0 left-0">
                <div className="bg-gradient-to-b from-transparent to-black absolute top-0 left-0 w-full h-full" />
                <img src={`${IMG_URL}${movie.backdrop_path}`} alt="" />
              </div>

              <div className="absolute p-10 z-10 flex flex-col space-y-5 bottom-0 left-0">
                <h1 className="text-4xl font-bold">{movie.title}</h1>
                <p className="w-[50vw] line-clamp-2">{movie.overview}</p>
                <div className="flex items-center gap-x-3">
                  <button onClick={() => navigate(`/movies/${movie.id}`)} className="bg-black font-medium hover:bg-black/50 py-3 px-7 rounded-lg">
                    About Movie
                  </button>
                  <button onClick={() => handleAddWatchlist(movie.id)} className="bg-white text-black font-medium py-3 px-7 rounded-lg">
                    Add to Watchlist
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
