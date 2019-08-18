import axios from 'axios';
import { register } from '../master/serviceWorker';

export default {
   

    // login a user
    getSingleUserMovieRevs: (data: any) => {
        return axios.get('http://localhost:8080/reviews/user/' + data)
    }

}