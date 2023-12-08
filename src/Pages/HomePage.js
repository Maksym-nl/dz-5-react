import { fetchTrendingMovies } from 'Api/Api';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MoviesList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        setMovies(response.results);
      } catch (error) {}
    };
    getMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
