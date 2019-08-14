import * as React from "react";
import SearchResult from "./SearchResult";
import { connect } from "react-redux";
import { IState, IMovieState } from "../../redux/reducers";

export interface IResultsProps {
  movie: IMovieState;
}
class Results extends React.Component<IResultsProps> {
  /**
   *
   */
  createList() {
    let list = [];
    let listIndex = 0;
    for (let i = 0; i < this.props.movie.titleList.length; i++) {
      if (this.props.movie.posterList[i] !== "N/A") {
        list.push({
          index: listIndex,
          title: this.props.movie.titleList[i],
          poster: this.props.movie.posterList[i],
          year: this.props.movie.yearList[i]
        });
        listIndex++;
      }
    }
    return list;
  }

  public render() {
    const movieArrayList = this.createList();

    const movieList = Object.values(movieArrayList).map((values, i) => (
      <div key={i} className="display-inline">
        <SearchResult
          title={values.title}
          poster={values.poster}
          year={values.year}
        />
      </div>
    ));
    return <div className="row">{movieList}</div>;
  }
}

const mapStateToProps = (state: IState) => ({
  movie: state.movie
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
