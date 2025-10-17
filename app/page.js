"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";

import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import HeroBanner from "../components/HeroBanner";
import { getMovies } from "../utils/tmdb";
import "./swiper.css";

export default async function Home() {
  const popular = await getMovies("popular");
  const topRated = await getMovies("top_rated");
  const nowPlaying = await getMovies("now_playing");
  const heroMovie = popular[0]; // First movie for banner

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <HeroBanner movie={heroMovie} />

      {/* 🔥 Popular Section */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4 hover:text-red-500 transition-colors">
          🔥 Popular
        </h2>
        <Swiper
          modules={[Navigation, FreeMode, Autoplay]}
          navigation
          freeMode
          grabCursor
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
        >
          {popular.map((m) => (
            <SwiperSlide key={m.id}>
              <MovieCard
                title={m.title}
                image={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ⭐ Top Rated Section */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4 hover:text-yellow-400 transition-colors">
          ⭐ Top Rated
        </h2>
        <Swiper
          modules={[Navigation, FreeMode, Autoplay]}
          navigation
          freeMode
          grabCursor
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
        >
          {topRated.map((m) => (
            <SwiperSlide key={m.id}>
              <MovieCard
                title={m.title}
                image={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🎬 Now Playing Section */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors">
          🎬 Now Playing
        </h2>
        <Swiper
          modules={[Navigation, FreeMode, Autoplay]}
          navigation
          freeMode
          grabCursor
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
        >
          {nowPlaying.map((m) => (
            <SwiperSlide key={m.id}>
              <MovieCard
                title={m.title}
                image={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

