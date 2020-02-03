import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className="review">
      <h4>{props.title}</h4>
      <img {props.rating} />
      <p> by {props.author} on {props.date} </p>
      <p> {props.content} </p>
    </div>
  );
};

export default ReviewCard;
