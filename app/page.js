import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';

const dummyMovies = [
  { title: 'Movie 1', image: 'https://via.placeholder.com/150x220' },
  { title: 'Movie 2', image: 'https://via.placeholder.com/150x220' },
  { title: 'Movie 3', image: 'https://via.placeholder.com/150x220' },
  { title: 'Movie 4', image: 'https://via.placeholder.com/150x220' },
];

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="p-4 flex overflow-x-scroll">
        {dummyMovies.map((movie, idx) => (
          <MovieCard key={idx} title={movie.title} image={movie.image} />
        ))}
      </div>
    </div>
  );
}
