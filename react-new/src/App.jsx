/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";
import { updateSearchCount } from "./appwrite";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");

  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    setMovieList([]);

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setMovieList(data.results);

        if (query) {
          updateSearchCount(query, data.results[0]); // Track search count
        }
      } else {
        setErrorMessage("No movies found.");
      }
    } catch (error) {
      console.error(`Error: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (debounceSearchTerm.trim() === "") {
      fetchMovies();
    } else {
      fetchMovies(debounceSearchTerm);
    }
  }, [debounceSearchTerm]);

  return (
    <main>
      <div className="pattern"> </div>

      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <section className="all-movies pt-8">
            <h2>{searchTerm ? "Search Results" : "All Movies"}</h2>

            {isLoading ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
              </div>
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : movieList.length === 0 ? (
              <p className="text-gray-400">
                No movies found. Try a different search!
              </p>
            ) : (
              <ul className="">
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>
        </header>
      </div>
    </main>
  );
};

export default App;
