import axios from 'axios';
import { SECRET } from '../api';

export default {
    getSingleMovie: () => {
        const url = ` http://www.omdbapi.com/?i=tt3896198&apikey=${SECRET.MOVIE_API_KEY}`;
        return axios.get(url)
    }
}