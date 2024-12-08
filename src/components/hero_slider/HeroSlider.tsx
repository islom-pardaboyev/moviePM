import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";
import { useGetNowPlayingMoviesQuery } from "../../store/api/now-playing-movies";
import { NowPlayingContext } from "../../utils";
import { IMG_URL } from "../../hook/useEnv";

export default function HeroSlider() {
  const { data } = useGetNowPlayingMoviesQuery(1) as {
    data: NowPlayingContext;
  };
  console.log(data);
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
                  <button className="bg-black font-medium hover:bg-black/50 py-3 px-7 rounded-lg">
                    About Movie
                  </button>
                  <button className="bg-white text-black font-medium py-3 px-7 rounded-lg">
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
