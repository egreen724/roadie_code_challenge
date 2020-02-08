import React, { Component } from 'react'
import StarRating from './star-rating.js'
import Graph from './graph.js'


class ReviewFilter extends Component {

  findAverage = () => {

    let ratings = this.props.reviews.map(review => parseInt(review.rating))
    let average = ratings.reduce((a,b) => a + b, 0)/ratings.length
    return average
  }

  render() {
    return (
    <div className="filter-container">

      <StarRating rating={this.findAverage()} /> {this.findAverage()} out of 5

      <p> {this.props.reviews.length} reviews </p>

      <Graph reviews={this.props.reviews} setRatingFilter={this.props.setRatingFilter}/>

    </div>
    )
  }

};

export default ReviewFilter;
