import * as React from 'react';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';
import { IState, IMovieState } from '../../redux/reducers';
import { movieSearchResolved, userSubmitRequest, inputUpdate, toDashboard } from '../../redux/actions/movie.actions';

export interface IResultsProps {
        movie: IMovieState;
    
        // Action properties from the dispatcher
    movieSearchResolved: (name: string,  posterUrl: string,) => void;
    userSubmitRequest: () => void;
    inputUpdate: (inputValue: string) => void;
    toDashboard: (toDashboard: boolean) => void;
}

class Results extends React.Component<IResultsProps> {

    createList() {
        let list;
        const search = this.props.movie.searchObject;
    }

    // let resultList;
    // for(int i = 0; i < t)
    
    public render() {
        return (
            <div>
                
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

export default connect(mapStateToProps, mapDispatchToProps)(Results);
