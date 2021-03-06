import axios from 'axios';
import { SECRET } from '../api';

export default {
    getSingleMovie: (title: string, year: string) => {
        const url = ` http://www.omdbapi.com/?apikey=${SECRET.MOVIE_API_KEY}&t=${title}&y=${year}`;
        return axios.get(url);
    },

    getMoviesByTitle: (title: string) => {
        const url = `http://www.omdbapi.com/?apikey=${SECRET.MOVIE_API_KEY}&s=${title}`;
        return axios.get(url);
    }
}