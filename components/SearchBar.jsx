"use client";
import { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=21d93b38faaed06d36b3ed4e49dc6351&query=${query}`
      );
      setResults(res.data.results);
    } catch (err) {
      console.error("Error searching movies:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-80 p-3 rounded bg-gray-800 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="bg-red-600 px-5 py-3 rounded font-semibold hover:bg-red-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-400">Searching...</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
}

