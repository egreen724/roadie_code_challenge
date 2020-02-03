import React from 'react';
import ProductContainer from './containers/product_container.js'
import ReviewsContainer from './containers/reviews_container.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header> </header>
      <ProductContainer />
      <ReviewsContainer />

    </div>
  );
}

export default App;
