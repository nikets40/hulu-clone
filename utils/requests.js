const API_KEY = process.env.API_KEY;

export default {
  fetchGenres: `genre/movie/list?api_key=${API_KEY}&language=en-US`
  ,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en_us`,
  fetchMovies: `discover/movie?api_key=${API_KEY}&with_genres=`,
};
