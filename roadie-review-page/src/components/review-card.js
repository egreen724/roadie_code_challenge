import React from 'react'

const ReviewCard = (props) => {

  return (
    <div className="review">
      <h4>{props.review.title}</h4>
      {props.review.rating}
      <img />
      <p> by {props.review.name} on {props.review.date} </p>
      <p> {props.review.content} </p>
    </div>
  );
};

export default ReviewCard;
