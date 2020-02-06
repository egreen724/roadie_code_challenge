import React, { Component } from 'react'
import ProductDescription from '../components/product_description.js'
import ReviewForm from '../components/review_form.js'

class ProductContainer extends Component {

  state = {
    showForm: false
  }

  renderForm = (event) => {
    this.setState({
      showForm: !this.state.show
    })
  }

  render() {
    return (
      <div>
        <div className='product-container'>
          <img id='logo' src='https://i.imgur.com/Jzqn8h7.jpg' />
          <ProductDescription />
        </div>
        <div className="button-container">
          <button className="white" onClick={() => this.renderForm()}>Leave Review</button>
          <button className="teal">Add to Cart</button>
        </div>
        <ReviewForm addReview={this.props.addReview} handleClose={this.renderForm} show={this.state.showForm} />
      </div>

    )
  }

}

export default ProductContainer
