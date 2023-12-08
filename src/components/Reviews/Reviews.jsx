import { fetchBayReviews } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetchBayReviews(params.movieId);
        setReviews(response.results);
      } catch (error) {}
    }
    getReviews();
  }, [params.movieId]);
  return (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Reviews;
