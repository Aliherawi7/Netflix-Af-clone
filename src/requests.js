const API_KEY = "e06fe0d3fe78f213fb68157dc5fb6def";
let appre = 'https://api.themoviedb.org/3/movie/550?api_key=e06fe0d3fe78f213fb68157dc5fb6def'
const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
} 
export default requests; 