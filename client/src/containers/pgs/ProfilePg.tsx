import React from "react";
import { connect } from "react-redux";
import { IState} from "../../redux/reducers";
import Line from "../../components/review/line";
import UserInfo from "../../components/user/UserInfo";
import Reviews from "../../components/review/Reviews";

export interface IProfilePgProps {
}

export class ProfilePg extends React.Component<IProfilePgProps> {
  render() {
    return (
      <div className="pg-bg">
        <div className="row">
          <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2 display-inline" />
          <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8 display-inline">
            <UserInfo />
            <Line />
            {/* <ResultsList /> */}
            {/* used to produce all the individual review components */}
            {/* use Results and SearchResult for reference */}
            <Reviews />
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
)(ProfilePg);
