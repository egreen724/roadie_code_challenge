import React, { Component } from 'react'

const ratings = [5, 4, 3, 2, 1]

class BarText extends Component {

  setText = (ratings) => {
     return ratings.map((rating) => (
      <div className='text'>
        <a href="#" onClick={() => (this.props.setRatingFilter(rating))}>{rating} star</a>
      </div>
    ))
  }

  render () {
    return (
      <div className="bar-text">
        {this.setText(ratings)}
      </div>
    )
  }

}

const Bar = ({percent}) => {
  return (
    <div className="bar-container">
      <div className="bar" style={{width: `${percent}%`}}>
      </div>
    </div>
  )
}


export default class Graph extends Component {

  findPercentage = (rating) => {
    let count = this.props.reviews.filter(review => review.rating === rating).length
    let percentage = (count/this.props.reviews.length) * 100
    return percentage
  }


  render () {
    return (
      <div className='graph-wrapper'>
        <div className='graph'>
          <BarText setRatingFilter={this.props.setRatingFilter}/>

          <div className="data-container">
            <Bar percent={this.findPercentage(5)} />
            <Bar percent={this.findPercentage(4)}/>
            <Bar percent={this.findPercentage(3)}/>
            <Bar percent={this.findPercentage(2)}/>
            <Bar percent={this.findPercentage(1)}/>
          </div>
        </div>
      </div>
    )
  }

}
