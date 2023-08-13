const API_KEY= 'd8f0d4af1161d30cc3e32380ecdb8c5e';

const request={
    requestPopular:` https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    requestTranding:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/157336?api_key=${API_KEY}&language=en-US&page=1`
}

export default request;