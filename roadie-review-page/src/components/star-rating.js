import React, {Component} from 'react'

export default class StarRating extends Component {

  setStars = () => {
    let stars = []

    for(var i = 0; i < 5; i++) {
      let klass = " "
        if (this.props.rating > i) {
         klass = 'star-selected';
        } else {
         klass = 'star';
        }

        stars.push(
          <label className={klass}>
            ★
          </label>
        );
      }

      return stars
  }


  render () {
    return (
      <div className="star-rating">
        {this.setStars()}
      </div>
    )
  }
}
