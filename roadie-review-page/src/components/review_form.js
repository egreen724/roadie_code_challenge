import React from 'react'

const ReviewForm = () => {
  return (
    <div className="form">
      <button id="x-button">X</button>
      <h1>ADD REVIEW</h1>

      <label>Rating</label>
      <input> </input>

      <label>Your name</label>
      <input> </input>

      <label>Review Title</label>
      <input> </input>

      <label>Write your review below</label>
      <input > </input>

      <button className="white">Cancel</button>
      <submit className="teal">Submit</submit>
    </div>
  );
};

export default ReviewForm;
