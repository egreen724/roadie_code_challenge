import React, { Component } from 'react'


class ReviewForm extends Component {

  state = {
    rating: '',
    name: '',
    title: '',
    content: ''
  }

  handleChange = (event) => {
   let name = event.target.name;
   let value = event.target.value;

   this.setState({[name]: value});

  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.name === "" || " ") {
      return alert("The name field cannot be blank.")
    } else if (this.state.title === "" || ' ') {
      return alert("The title field cannot be blank.")
    } else if (this.state.content === "" || ' ') {
      return alert("The review cannot be blank.")
    } else {
      console.log(this.state)
    }

  }

  handleClose = (event) => {
    this.props.handleClose && this.props.handleClose(event)
  }

  render() {
    if(!this.props.show) {
      return null
    } else {
    return (
    <div>
      <button id="x-button" onClick={this.handleClose}>X</button>

      <h1>ADD REVIEW</h1>

      <form onSubmit={this.handleSubmit}>

        <label>Rating</label>
        <select onChange={this.handleChange} name='rating' value={this.state.rating}>
          <option value="1">One star</option>
          <option value="2">Two stars</option>
          <option value="3">Three stars</option>
          <option value="4">Four stars</option>
          <option value="5">Five stars</option>
        </select>

        <label>Your name</label>
        <input
          type='text'
          name='name'
          onChange={this.handleChange}
        />

        <label>Review Title</label>
        <input
          type='text'
          name='title'
          onChange={this.handleChange}
        />

        <label>Write your review below</label>
        <input
          type='textarea'
          name='content'
          onChange={this.handleChange}
        />

        <button className="white">Cancel</button>
        <input type='submit' className="teal" value="Submit"/>
      </form>
    </div>
    )
  }
}

};

export default ReviewForm;
