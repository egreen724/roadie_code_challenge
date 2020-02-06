import React, { Component } from 'react'
import ReviewFilter from '../components/review-filter.js'
import ReviewCard from '../components/review-card.js'

class ReviewsContainer extends Component {

  state = {
    ratingSelection: '',

  }

  setRatingFilter = (userSelection) => {
    this.setState({
      ratingSelection: userSelection
    })
  }

  renderReviews = () => {
  
    let filteredReviews = this.props.reviews

    if (this.state.ratingSelection !== '') {
      filteredReviews = this.props.reviews.filter(review => review.rating === this.state.ratingSelection)
    } else {
      filteredReviews = this.props.reviews
    }

    return filteredReviews.map(review => {
      return <ReviewCard review={review}/>
    })

  }



  render() {
    return (
      <div>
        <h2>CUSTOMER REVIEWS</h2>
        <ReviewFilter setRatingFilter={this.setRatingFilter} reviews={this.props.reviews}/>

        <div className="review-container">
          {this.renderReviews()}
        </div>
      </div>

    )
  }

}

export default ReviewsContainer
