import React, { Component } from 'react'
import ProductDescription from '../components/product_description.js'
import ReviewForm from '../components/review_form.js'

class ProductContainer extends Component {

  state = {
    showForm: false
  }

  renderForm = (event) => {
    this.setState({
      showForm: true
    })
  }

  closeForm = () => {
    this.setState({
      showForm: false
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
          <button className="white" onClick={() => this.renderForm()}>LEAVE REVIEW</button>
          <button className="teal">ADD TO CART</button>
        </div>
        <ReviewForm addReview={this.props.addReview} handleClose={this.closeForm} show={this.state.showForm} />
      </div>

    )
  }

}

export default ProductContainer
