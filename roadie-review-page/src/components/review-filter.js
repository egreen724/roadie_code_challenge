import React, { Component } from 'react'
import StarRating from './star-rating.js'
import { ResponsiveBar } from '@nivo/bar'

class ReviewFilter extends Component {

  findAverage = () => {
    debugger; 
    let ratings = this.props.reviews.map(review => parseInt(review.rating))
    let average = ratings.reduce((a,b) => a + b, 0)/ratings.length
    return average
  }

  setData = () => {

    const data = [
      {rating: '5 stars', count: this.props.reviews.filter(review => review.rating === 5).length},
      {rating: '4 stars', count: this.props.reviews.filter(review => review.rating === 4).length},
      {rating: '3 stars', count: this.props.reviews.filter(review => review.rating === 3).length},
      {rating: '2 stars', count: this.props.reviews.filter(review => review.rating === 2).length},
      {rating: '1 stars', count: this.props.reviews.filter(review => review.rating === 1).length},

    ]
    return data
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
