import React, { Component } from 'react'
import ReviewFilter from '../components/review-filter.js'
import ReviewCard from '../components/review-card.js'

class ReviewsContainer extends Component {

  state = {
    ratingSelection: '',
    reviews: [
      {
        name: "Test User",
        title: "Perfect",
        rating: 5,
        date: "01/01/20",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
      {
        name: "Test User",
        title: "Great device!",
        rating: 4,
        date: "01/01/20",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
      {
        name: "Test User",
        title: "Easy installation",
        rating: 4,
        date: "01/01/20",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
      {
        name: "Test User",
        title: "Not bad",
        rating: 3,
        date: "01/01/20",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
    ]
  }

  setRatingFilter = (userSelection) => {
    this.setState({
      ratingSelection: userSelection
    })
  }

  renderReviews = () => {
    let filteredReviews = this.state.reviews

    if (this.state.ratingSelection !== '') {
      filteredReviews = this.state.reviews.filter(review => review.rating === this.state.ratingSelection)
    } else {
      filteredReviews = this.state.reviews
    }

    return filteredReviews.map(review => {
      return <ReviewCard review={review}/>
    })

  }



  render() {
    return (
      <div>
        <h2>CUSTOMER REVIEWS</h2>
        <ReviewFilter setRatingFilter={this.setRatingFilter} reviews={this.state.reviews}/>

        <div className="review-container">
          {this.renderReviews()}
        </div>
      </div>

    )
  }

}

export default ReviewsContainer
