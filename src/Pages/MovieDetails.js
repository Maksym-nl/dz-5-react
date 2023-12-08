import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMoviesId } from 'Api/Api';

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (!params.movieId) return;
    async function getMovies() {
      try {
        const response = await fetchMoviesId(params.movieId);
        setMovie(response);
      } catch (error) {}
    }
    getMovies();
  }, [params.movieId]);

  const imagePosterPath = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  const goBackBtn = useRef(location.state?.from ?? '/');

  return (
    <>
      <Link to={goBackBtn.current}>Go back....</Link>
      <div>
        <img
          src={
            movie.poster_path ? `${imagePosterPath}${movie.poster_path}` : null
          }
          alt={movie.title}
        />
        <div>
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average}</p>
          <h3>Overvies</h3>
          <p>{movie.overview}</p>
          <h3>Genres :</h3>
          <ul>
            {movie.genres &&
              movie.genres.map(genre => {
                return (
                  <li key={genre.id}>
                    <p>{genre.name}</p>
                  </li>
                );
              })}
          </ul>
        </div>
        <div>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}
