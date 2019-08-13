import React from 'react';
import { IState, IMovieState } from '../../redux/reducers';
import { movieSearchResolved, userSubmitRequest, inputUpdate } from '../../redux/actions/movie.actions';
import { connect } from 'react-redux';
// import axios from 'axios'
import { OMDB } from '../../api';

export interface IMovieProps {
    movie: IMovieState;

    // Action properties from the dispatcher
    movieSearchResolved: (name: string,  posterUrl: string,) => void;
    userSubmitRequest: () => void;
    inputUpdate: (inputValue: string) => void;
}

export class MovieComponent extends React.Component<IMovieProps> {

    handleInputChange(e: any) {
        console.log('input changing');
        const value = e.target.value;
        this.props.inputUpdate(value);
    }

    submit() {       
        this.props.userSubmitRequest();
        OMDB.getMoviesByTitle(this.props.movie.inputValue)
            .then(payload => {
            console.log('payload', payload.data)
            const name = payload.data.Title;
            const posterUrl = payload.data.Poster;
            this.props.movieSearchResolved(name, posterUrl);
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
                    <h2>{this.props.movie.name}</h2>
                <img src={this.props.movie.posterUrl} alt="poster"></img>
                </div>
                <div id="movie-input">
                    <input type="text" id="movie-text-input" onChange={(e) => this.handleInputChange(e)} />
                    <button onClick={() => this.submit()}>Find my api</button>
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