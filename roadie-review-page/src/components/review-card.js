import React from 'react'
import StarRating from './star-rating.js'

const ReviewCard = (props) => {

  return (
    <div className="review">
      <h4>{props.review.title}</h4>
      <StarRating rating={props.review.rating} />
      <p style={{'font-size': '.75em'}}> by {props.review.name} on {props.review.date} </p>
      <p> {props.review.content} </p>
    </div>
  );
};

export default ReviewCard;
