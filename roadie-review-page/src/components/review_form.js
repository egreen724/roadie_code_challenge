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

  }

  render() {
    return (
    <div>
    <button id="x-button">X</button>

      <h1>ADD REVIEW</h1>

      <form onSubmit={this.handleSubmit}>

        <label>Rating</label>
        <select value={this.state.rating}>
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
        <input type='submit' className="teal">Submit</submit>
      </form>
    </div>
    )
  }

};

export default ReviewForm;
