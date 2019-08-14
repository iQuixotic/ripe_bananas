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
        <div className="review">
            {props.review}
        </div>
        <div className="name">
            {props.fn} {props.ln}
        </div>
    </div>
  );
};

export default ReviewCard;
