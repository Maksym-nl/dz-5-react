import { SerchBar } from 'components/SerchBar/SerchBar';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api/Api';
import { MovieList } from 'components/MoviesList/MovieList';
import { useSearchParams } from 'react-router-dom';

export default function MovisePage() {
  const [searchValue, setSearchValue] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const value = searchValue.get('value');
    if (!value) return;

    const getMovies = async () => {
      try {
        const response = await fetchMovies(value);
        setMovies(response.results);
      } catch (error) {}
    };
    getMovies();
  }, [searchValue]);

  const onSubmit = value => {
    setSearchValue({ value });
  };

  return (
    <div>
      <SerchBar onSubmit={onSubmit} />
      <MovieList movies={movies} />
    </div>
  );
}
