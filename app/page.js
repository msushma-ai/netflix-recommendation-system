import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../utils/tmdb';

export default async function Home() {
  const popular = await getMovies('popular');
  const topRated = await getMovies('top_rated');
  const nowPlaying = await getMovies('now_playing');

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="p-4">
        <h2 className="text-xl font-semibold mb-2">🔥 Popular</h2>
        <div className="flex overflow-x-scroll">
          {popular.map((m) => (
            <MovieCard
              key={m.id}
              title={m.title}
              image={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
            />
          ))}
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-xl font-semibold mb-2">⭐ Top Rated</h2>
        <div className="flex overflow-x-scroll">
          {topRated.map((m) => (
            <MovieCard
              key={m.id}
              title={m.title}
              image={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
            />
          ))}
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-xl font-semibold mb-2">🎬 Now Playing</h2>
        <div className="flex overflow-x-scroll">
          {nowPlaying.map((m) => (
            <MovieCard
              key={m.id}
              title={m.title}
              image={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

