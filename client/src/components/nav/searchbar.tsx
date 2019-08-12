import React from 'react';
import 'react-fa';
import './style.css'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IState, IMovieState } from '../../redux/reducers';
import { movieSearchResolved, userSubmitRequest, inputUpdate } from '../../redux/actions/movie.actions';
import { connect } from 'react-redux';
// import axios from 'axios'
import { OMDB } from '../../api';


export interface IMovieProps {
    movie: IMovieState;

    // Action properties from the dispatcher
    movieSearchResolved: (name: string,  spriteUrl: string,) => void;
    userSubmitRequest: () => void;
    inputUpdate: (inputValue: string) => void;
}

/**
 * This component renders a search bar that has a text input field,
 * a select to choose how to seach and a search button
 */
class Searchbar extends React.Component<IMovieProps>{

    handleInputChange(e: any) {
        console.log('input changing');
        const value = e.target.value;
        this.props.inputUpdate(value);
    }

    submit() {       
        this.props.userSubmitRequest();
        OMDB.getSingleMovie()
            .then(payload => {
            console.log('payload', payload.data)
            const name = payload.data.Title;
            const spriteUrl = payload.data.Poster;
            this.props.movieSearchResolved(name, spriteUrl);
        })
    }

    render() {
        return (
            <div className="searchbar input-group mb-3 col-12"> 

                {/* text input field */}
                <input className="form-control col-8 m0" type="text" placeholder="Search"/>  

                {/* div contains the two buttons appended to the text input  */}
                <div className="input-group-append" id="button-addon4">
                    {/* <select className="custom-select br0" id="inputGroupSelect04">
                        <option defaultValue="0">Select</option>
                        <option value="1">Title</option>
                        <option value="2">Genre</option>
                    </select> */}
                    <button className="btn" id="rb-btn"><FontAwesomeIcon icon={faSearch} /></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);