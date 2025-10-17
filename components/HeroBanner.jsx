export default function HeroBanner({ movie }) {
  if (!movie) return null;

  return (
    <div
      className="relative w-full h-[70vh] text-white flex items-center justify-start"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Stronger dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 px-12 max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-2xl">
          {movie.title}
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed mb-6 drop-shadow-lg line-clamp-3">
          {movie.overview}
        </p>
        <div className="flex gap-4">
          <button className="bg-red-600 px-6 py-3 text-lg font-semibold rounded hover:bg-red-700 transition">
            ▶ Play
          </button>
          <button className="bg-gray-700 px-6 py-3 text-lg font-semibold rounded hover:bg-gray-600 transition">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
}
