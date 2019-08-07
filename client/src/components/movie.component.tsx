import React from 'react';
import Axios from 'axios';
import { IState, IMovieState } from '../Reducers';
import { movieSearchResolved, userSubmitRequest, inputUpdate } from '../Actions/movie.actions';
import { connect } from 'react-redux';
import { SECRET } from '../api';

// Recall that mostly redux components will deal with properties
// provided by the state store
export interface IMovieProps {
    movie: IMovieState;

    // Action properties from the dispatcher
    movieSearchResolved: (name: string,  spriteUrl: string,) => void;
    userSubmitRequest: () => void;
    inputUpdate: (inputValue: string) => void;
}

export class MovieComponent extends React.Component<IMovieProps> {
    constructor(props: any) {
        super(props);
    }

    handleInputChange(e: any) {
        console.log('input changing');
        const value = e.target.value;
        this.props.inputUpdate(value);
    }

    submit() {
        console.log('submit clicked');
        const url = `http://www.omdbapi.com/?apikey=${SECRET.MOVIE_API_KEY}&`;
        this.props.userSubmitRequest();
        Axios.get(url).then(payload => {
            console.log('payload', payload)
           // const id = payload.data.id;
            const name = payload.data.name;
            const spriteUrl = payload.data;
           // const types = payload.data.types.map((typingAssignment: any) => {
               // return name;
           // });
            this.props.movieSearchResolved(name, spriteUrl);
        })
    }

    submitPost() {
        const url = `https://api.myjson.com/bins`;
        const data = {
            a: 'Abby',
            b: 'Billy',
            c: 'Cindy'
        };
        const config = {
            headers: {
                "Content-Type": "text/html",
            }
        }
        Axios.post(url, data, config).then((payload) => {
            console.log(payload);
        })
    }

    render() {
       // const types = this.props.movie.types.map((type:any) => {
           //return (<span key={type} className="movie-type-span">{type}</span>);
        //})
        return (
            <div>
                <h1>Movie Finder</h1>
                <div id="movie-display">
                    <h2>#{this.props.movie.name}: {this.props.movie.name}</h2>
                {/*<img src={this.props.movie.spriteUrl}></img>*/}
                    <div>
                        
                    </div>
                </div>
                <div id="movie-input">
                    <input type="text" id="movie-text-input" onChange={(e) => this.handleInputChange(e)} />
                    <button onClick={() => this.submit()}>Find my api</button>
                    <button onClick={() => this.submitPost()}>Submit</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => ({
    movie: state.movie
});

const mapDispatchToProps = {
    movieSearchResolved: movieSearchResolved,
    userSubmitRequest: userSubmitRequest,
    inputUpdate: inputUpdate
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);