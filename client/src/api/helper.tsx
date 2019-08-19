import axios from 'axios';

export default {
   
    // because...
    getUserByEmail: (data: any) => {
        return axios.get('http://localhost:8080/reviews/user/' + data)
    
    },

    getMovieByTitleAndYear: (data: any) => {
        console.log(data.title);
        
        return (axios.get('http://localhost:8080/movie/' +
        data.title + '/' + data.year))
    },

    postNewMovie: (data: any) => {
        return axios({
            method: 'post',
            url: 'http://localhost:8080/movie',
            data: {
                title: data.title,
                plot: data.plot,
                year: data.year,
                url: data.poster
            },
        })
    },


    doEverything: (data: any) => {
        return axios({
            method: "post",
            url: 'http://localhost:8080/reviews',
            data: data
        });        
    }

}