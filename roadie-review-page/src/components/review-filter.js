import React, { Component } from 'react'


class ReviewFilter extends Component {

  setRatingFilter = () => {

  }

  findAverage = () => {
    let ratings = this.props.reviews.map(review => review.rating)

    let average = ratings.reduce((a,b) => a + b, 0)/ratings.length
    return average
  }

  render() {
    return (
    <div className="filter-container">
      <p> {this.findAverage()}</p>
      <p> {this.props.reviews.length} reviews </p>

      <a href="#" onClick={this.setRatingFilter}>5 star</a>
      <a href="#" onClick={this.setRatingFilter}>4 star</a>
      <a href="#" onClick={this.setRatingFilter}>3 star</a>
      <a href="#" onClick={this.setRatingFilter}>2 star</a>
      <a href="#" onClick={this.setRatingFilter}>1 star</a>
    </div>
    )
  }
};

export default ReviewFilter;
