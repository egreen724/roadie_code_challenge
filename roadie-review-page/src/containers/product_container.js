import React, { Component } from 'react'
import ProductDescription from '../components/product_description.js'
import ReviewButton from '../components/review_button.js'

class ProductContainer extends Component {

  render() {
    return (
      <div>
        <img src='' />
        <ProductDescription />
        <ReviewButton />
      </div>

    )
  }

}

export default ProductContainer
