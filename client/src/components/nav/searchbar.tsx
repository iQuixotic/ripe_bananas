import React from "react";
import "react-fa";
import "./style.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IState, IMovieState } from "../../redux/reducers";
import {
  movieSearchResolved,
  userSubmitRequest,
  inputUpdate,
  toDashboard,
  movieSearchObject
} from "../../redux/actions/movie.actions";
import { connect } from "react-redux";
// import axios from 'axios'
import { OMDB } from "../../api";
import { Redirect } from "react-router";

export interface IMovieProps {
  movie: IMovieState;

  // Action properties from the dispatcher
  movieSearchResolved: (
    name: string,
    plot: string,
    year: string,
    posterUrl: string
  ) => void;
  userSubmitRequest: () => void;
  inputUpdate: (inputValue: string) => void;
  toDashboard: (toDashboard: boolean) => void;
  movieSearchObject: (
    titleList: string[],
    posterList: string[],
    yearList: string[]
  ) => void;
}

/**
 * This component renders a search bar that has a text input field,
 * a select to choose how to seach and a search button
 */
class Searchbar extends React.Component<IMovieProps> {
  handleInputChange(e: any) {
    const value = e.target.value;
    this.props.inputUpdate(value);
  }

  handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      this.submit();
    }
  };

  submit() {
    this.props.userSubmitRequest();
    OMDB.getMoviesByTitle(this.props.movie.inputValue).then(payload => {
      let titleList = new Array<string>();
      let posterList = new Array<string>();
      let yearList = new Array<string>();
      if (payload.data.length > 0) {
        for (let i = 0; i < payload.data.Search.length; i++) {
          titleList.push(payload.data.Search[i].Title);
          posterList.push(payload.data.Search[i].Poster);
          yearList.push(payload.data.Search[i].Year);
        }
      }
      this.props.movieSearchObject(titleList, posterList, yearList);
      this.goToDashboard();
    });
  }

  goToDashboard() {
    this.props.toDashboard(!this.props.movie.toDashboard);
  }

  render() {
    if (this.props.movie.toDashboard === true) {
      this.goToDashboard();
      return <Redirect to="/results" />;
    }

    return (
      <div className="searchbar input-group mb-3 col-12">
        {/* text input field */}
        <input
          className="form-control col-12 m0"
          type="text"
          placeholder="Search"
          onChange={e => this.handleInputChange(e)}
          onKeyPress={this.handleKeyPress}
        />

        {/* div contains the two buttons appended to the text input  */}
        <div className="input-group-append" id="button-addon4">
          {/* <select className="custom-select br0" id="inputGroupSelect04">
                        <option defaultValue="0">Select</option>
                        <option value="1">Title</option>
                        <option value="2">Genre</option>
                    </select> */}
          <button className="btn" id="rb-btn" onClick={() => this.submit()}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
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
  toDashboard: toDashboard,
  movieSearchObject: movieSearchObject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
