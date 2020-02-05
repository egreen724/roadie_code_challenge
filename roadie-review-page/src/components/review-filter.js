import React, { Component } from 'react'
import StarRating from './star-rating.js'

class ReviewFilter extends Component {

  findAverage = () => {
    let ratings = this.props.reviews.map(review => review.rating)

    let average = ratings.reduce((a,b) => a + b, 0)/ratings.length
    return average
  }

  render() {
    return (
    <div className="filter-container">
      <StarRating rating={this.findAverage()} /> {this.findAverage()} out of 5
      <p> {this.props.reviews.length} reviews </p>

      <a href="#" onClick={() => (this.props.setRatingFilter(5))}>5 star</a>
      <a href="#" onClick={() => (this.props.setRatingFilter(4))}>4 star</a>
      <a href="#" onClick={() => this.props.setRatingFilter(3)}>3 star</a>
      <a href="#" onClick={() => this.props.setRatingFilter(2)}>2 star</a>
      <a href="#" onClick={() => this.props.setRatingFilter(1)}>1 star</a>
    </div>
    )
  }
};

export default ReviewFilter;
