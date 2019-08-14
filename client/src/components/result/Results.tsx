import * as React from 'react';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';
import { IState, IMovieState } from '../../redux/reducers';
import { movieSearchResolved, userSubmitRequest, inputUpdate, toDashboard } from '../../redux/actions/movie.actions';

export interface IResultsProps {
        movie: IMovieState;
    
        // Action properties from the dispatcher
    movieSearchResolved: (name: string, plot: string, year: string,  posterUrl: string) => void;
    userSubmitRequest: () => void;
    inputUpdate: (inputValue: string) => void;
    toDashboard: (toDashboard: boolean) => void;
}

class Results extends React.Component<IResultsProps> {

    createList() {
        let list = [];
        for(let i = 0; i < this.props.movie.titleList.length; i++) {
            list[i] = {
                index: i,
                title: this.props.movie.titleList[i],
                poster: this.props.movie.posterList[i],
                year: this.props.movie.yearList[i]
            }
        }
        return list;
    }
    
    public render() {
        const movieArrayList = this.createList();
        const movieList = Object.values(movieArrayList).map((values, i)  =>
            <div key={i} className="display-inline">
                <SearchResult title={values.title} poster={values.poster} year={values.year}/> 
            </div>          
        );
        return (
            <div className="row">
               {movieList}
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
