import React, { Component } from 'react'
import ProductContainer from './containers/product_container.js'
import ReviewsContainer from './containers/reviews_container.js'

export default class AppContainer extends Component {

  state = {
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

  addReview = (newReview) => {
    this.setState({
      ...this.state, reviews: this.state.reviews.push(newReview)
    })
  }

  render () {
    return (
      <div>
        <ProductContainer addReview={this.addReview}/>
        <ReviewsContainer reviews={this.state.reviews}/>
      </div>
    );
  }

}
