import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '14faff239da21831d7eeebedab4fa89d',

  //   orientation: 'horizontal',
  //   per_page: '12',
};

export const fetchMovies = async value => {
  //   const resp = await axios.get(`?q=${value}&page=${page}`);
  const response = await axios.get(`/search/movie?query=${value}`);
  return response.data;
};

export const fetchMoviesId = async moviesId => {
  const response = await axios.get(`/movie/${moviesId}`);
  return response.data;
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day?language=en-US`);
  return response.data;
};

export const fetchBayCast = async id => {
  const response = await axios.get(`/movie/${id}/credits?language=en-US `);
  return response.data;
};

export const fetchBayReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews?language=en-US `);
  return response.data;
};
// 'https://api.themoviedb.org/3/trending/all/day?language=en-US' \
// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' \
// 'https://api.themoviedb.org/3/movie/7/credits?language=en-US' \
// 'https://api.themoviedb.org/3/movie/7/reviews?language=en-US' \
