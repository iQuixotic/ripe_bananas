import React from "react";
import { connect } from "react-redux";
import { IState } from "../../redux/reducers";
import Results from "../../components/result/Results";

export interface IPageProps {
}

export class SearchResults extends React.Component<IPageProps> {
  render() {
    return (
      <div className="pg-bg">
        <div className="row search-results">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 display-inline result-margin" />
          <div className="listed-results display-inline col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8">
            <Results />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
