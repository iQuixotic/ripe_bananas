import axios from 'axios';
import { register } from '../master/serviceWorker';

export default {
   

    // login a user
    login: (data: any) => {
        return axios.post('http://localhost:8080/users/login', data)
    },
    
    // get user by email    
    getAndSetUserByEmail: (data: any) => {
        return axios({
            method: "POST",
            url: ('http://localhost:8080/users/em'),
            data: data
        })
    },       

    // register a user
    registerNewUser: (data: any) => {
        return axios({
            method: "POST",
            url: ('http://localhost:8080/users/register'),
            data: data,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
    }, 

    // logout a user (discard token and set state to empty...)

}