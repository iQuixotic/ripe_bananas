import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { IState, IMovieState } from '../../redux/reducers';
import { movieSearchResolved, userSubmitRequest, inputUpdate, toDashboard } from '../../redux/actions/movie.actions';
import { OMDB } from '../../api';
import NoPoster from './NoPoster.jpg';

export interface ISearchResultProps {
    movie: IMovieState;

    // Action properties from the dispatcher
    movieSearchResolved: (name: string,  posterUrl: string,) => void;
    userSubmitRequest: () => void;
    inputUpdate: (inputValue: string) => void;
    toDashboard: (toDashboard: boolean) => void;
}

class SearchResult extends React.Component<ISearchResultProps> {

    submit() {       
        this.props.userSubmitRequest();
        OMDB.getMoviesByTitle(this.props.movie.inputValue)
            .then(payload => {
            console.log('payload', payload.data)
            const name = payload.data.Title;
            const posterUrl = payload.data.Poster;
            this.props.movieSearchResolved(name, posterUrl);
        });
    }

    getPoster(): string {
        if(this.props.movie.posterUrl === 'N/A') {
            return NoPoster;
        }
        return this.props.movie.posterUrl;
    }

    public render() {

        return (
            <div className="result-wrapper col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2">

                <div className="result-container row">
                    <div className="col-2 display-inline" />
                    <div className="poster-wrapper col-8">
                       
                    <img src={this.getPoster()} className="w-100 c-image" alt="Poster" />
                    </div>
                </div>
                <div className="btn-wrapper row">
                    <div className="col-2 display-inline"></div>
                    <button className="signup btn" data-dismiss="modal" id="rb-btn"
                                data-toggle="modal" data-target="#result-modal"
                                onClick={() => this.submit()}>{this.props.movie.name}</button>
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
    inputUpdate: inputUpdate,
    toDashboard: toDashboard
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

