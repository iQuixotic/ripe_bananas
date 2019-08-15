import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusCircle, faPlusCircle,  } from "@fortawesome/free-solid-svg-icons";
const ReviewCard: React.FunctionComponent<any> = (props) => {
  return(
    <div className={props.className}>
        <div className="flex-contain">

            <div className="rating">
                {props.rating}
            </div>
            <div className="title">
                {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
            </div>
        </div>
        
        <div className={props.reviewOpen ? "review" : "review-closed"}>
            {props.review}
        </div>
        <div className="name">
            {props.fn.charAt(0).toUpperCase() + props.fn.slice(1)} {props.ln.substring(0,1).toUpperCase()}
        </div>
        <button className={props.reviewOpen ? 'ex-shr-closed' : 'ex-shr'} onClick={props.openClose}>
            <FontAwesomeIcon icon={props.reviewOpen ? faMinusCircle: faPlusCircle} /> 
        </button>
    </div>
  );
};

export default ReviewCard;
