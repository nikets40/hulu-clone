const API_KEY = process.env.API_KEY;

export default {
  
  fetchGenres: {
      title:"Genres",
      url: `genre/movie/list?api_key=${API_KEY}&language=en-US`
  },
};
