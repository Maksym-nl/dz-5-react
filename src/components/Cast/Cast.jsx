import { fetchBayCast } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const response = await fetchBayCast(params.movieId);
        setCast(response.cast);
      } catch (error) {}
    }
    getCast();
  }, [params.movieId]);
  const imagePosterPath = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <div>
        <ul>
          {cast.map(character => {
            return (
              <li key={character.id}>
                <img
                  src={
                    character.profile_path
                      ? `${imagePosterPath}${character.profile_path}`
                      : null
                  }
                  alt={character.title}
                />
                <div>
                  <p>{character.character}</p>
                  <p>{character.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
