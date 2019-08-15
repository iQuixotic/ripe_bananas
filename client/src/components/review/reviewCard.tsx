import * as React from 'react';

const ReviewCard: React.FunctionComponent<any> = (props) => {
  return(
    <div className={props.className}>
        <div className="flex-contain">

            <div className="rating">
                {props.rating}
            </div>
            <div className="title">
                {props.title}
            </div>
        </div>
        <button onClick={props.openClose}>Expand/Shrink</button>
        <div className={props.reviewOpen ? "review" : "review-closed"}>
            {props.review}
        </div>
        <div className="name">
            {props.fn} {props.ln.substring(0,1)}
        </div>
    </div>
  );
};

export default ReviewCard;
