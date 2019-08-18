import React from "react";
import { connect } from "react-redux";
// import axios from 'axios';
// import { SECRET } from '../../api';
import { IState, IPageState } from "../../redux/reducers";
import { dashboardMessageReq } from "../../redux/actions/pages.actions";

export interface IPageProps {
  message: IPageState;

  // Action properties from the dispatcher
  dashboardMessageReq: () => void;
  // fourOfourMessageReq: () => void;
  // landingMessageReq: () => void;
  // multiReviewMessageReq: () => void;
  // singleReviewMessageReq: () => void;
}

export class HomePg extends React.Component<IPageProps> {
  render() {

    return (
      <div className="pg-bg ">
       
     <img  src="http://www.pngmart.com/files/3/Welcome-PNG-Image.png" alt="welcome" className="fit-image" />
  
    
      </div>

   
    );
  }
}



const mapStateToProps = (state: IState) => ({
  message: state.page
});

const mapDispatchToProps = {
  dashboardMessageReq: dashboardMessageReq
  // movieSearchResolved: movieSearchResolved,
  // userSubmitRequest: userSubmitRequest,
  // inputUpdate: inputUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePg);


