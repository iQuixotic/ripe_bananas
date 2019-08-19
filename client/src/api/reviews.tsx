import axios from 'axios';
import { register } from '../master/serviceWorker';
import { APIU, APIH } from '.'

export default {



    getSingleUserMovieRevs: (data: any) => {
        return axios.get('http://localhost:8080/reviews/user/' + data)
    },

    postReview: (data: any) => {
        console.log('data is the axios ', data)
        return axios({
            method: 'post',
            url: (`http://localhost:8080/reviews/` + data.email + '/' + data.title + '/' + data.year),
            data: {
                body: data.body,
                revTitle: data.revTitle,
                rating: data.rating,
                poster: data.poster,
                plot: data.plot
            }
        })
    },

    // axios post
    // axios getUserByEmail ()
    // axios getMovieByTitleAndYear

    // if(movie == null) {
    // create a new movie and set movie == movie
    // }

    // postReview: (data: any) => {
    //     let user: any, movie, reviewData: any;
    //     APIU.getAndSetUserByEmail(data.user)
    //         .then(res => user = res.data)
    //         .catch((e: any) => { throw e });
    //     APIH.getMovieByTitleAndYear(data.movie)
    //         .then(res => {
    //             movie = res.data
    //             if (movie === null) {
    //                 APIH.postNewMovie(data.movie)
    //                     .then(res => movie = res.data)
    //                     .catch(e => { throw e });
    //             }
    //             reviewData = {
    //                 user: user,
    //                 movie: movie,
    //                 title: data.title,
    //                 body: data.body,
    //                 rating: data.rating
    //             }

    //         })
    //         .then(() =>  APIH.doEverything(reviewData))
    //         .catch((e: any) => { throw e });


    // },



}