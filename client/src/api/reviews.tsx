import axios from 'axios';

export default {
    getSingleMovie: (title: string, year: string) => {
        const url = ` http://www.omdbapi.com/?apikey=${SECRET.MOVIE_API_KEY}&t=${title}&y=${year}`;
        return axios.get(url);
    }
}