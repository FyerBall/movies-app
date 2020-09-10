const API_KEY = "ee6fdf67b0b4cf0acc0aed720f3da8ce";

export default {
  fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchAction: `discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
  fetchAdventure: `discover/movie?api_key=${API_KEY}&with_genres=12&language=en-US`,
  fetchAnimation: `discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US`,
  fetchComedy: `discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
  fetchCrime: `discover/movie?api_key=${API_KEY}&with_genres=80&language=en-US`,
  fetchDocumentary: `discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`,
  fetchDrama: `discover/movie?api_key=${API_KEY}&with_genres=18&language=en-US`,

  fetchFamily: `discover/movie?api_key=${API_KEY}&with_genres=10751&language=en-US`,

  fetchFantasy: `discover/movie?api_key=${API_KEY}&with_genres=14&language=en-US`,

  fetchHistory: `discover/movie?api_key=${API_KEY}&with_genres=36&language=en-US`,

  fetchHorror: `discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,

  fetchMusic: `discover/movie?api_key=${API_KEY}&with_genres=10402&language=en-US`,

  fetchMystery: `discover/movie?api_key=${API_KEY}&with_genres=9648&language=en-US`,

  fetchRomance: `discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,

  fetchScienceFiction: `discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US`,

  fetchTVMovie: `discover/movie?api_key=${API_KEY}&with_genres=10770&language=en-US`,

  fetchThriller: `discover/movie?api_key=${API_KEY}&with_genres=53&language=en-US`,

  fetchWar: `discover/movie?api_key=${API_KEY}&with_genres=10752&language=en-US`,
  fetchWestern: `discover/movie?api_key=${API_KEY}&with_genres=37&language=en-US`,
};
