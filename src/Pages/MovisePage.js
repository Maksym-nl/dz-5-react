import { SerchBar } from 'components/SerchBar/SerchBar';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api/Api';
import { MovieList } from 'components/MoviesList/MovieList';

export default function MovisePage() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchValue) return;
    const getMovies = async () => {
      try {
        const response = await fetchMovies(searchValue);
        setMovies(response.results);
      } catch (error) {}
    };
    getMovies();
  }, [searchValue]);

  const onSubmit = value => {
    setSearchValue(value);
  };

  return (
    <div>
      <SerchBar onSubmit={onSubmit} />
      <MovieList movies={movies} />
    </div>
  );
}
