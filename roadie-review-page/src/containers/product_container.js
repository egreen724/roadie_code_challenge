import React, { Component } from 'react'
import ProductDescription from '../components/product_description.js'
import ReviewButton from '../components/review_button.js'

class ProductContainer extends Component {

  render() {
    return (
      <div>
        <div className='product-container'>
          <img id='logo' src='https://i.imgur.com/Jzqn8h7.jpg' />
          <ProductDescription />
        </div>
        <ReviewButton />
      </div>

    )
  }

}

export default ProductContainer
