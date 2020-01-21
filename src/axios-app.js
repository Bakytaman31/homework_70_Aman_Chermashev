import axios from 'axios';

const axiosApp = axios.create({
    baseURL: 'http://api.tvmaze.com/search/shows?q='
});

export default axiosApp;