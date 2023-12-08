import { fetchBayCast } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
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
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
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
                      : defaultImg
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

export default Cast;
