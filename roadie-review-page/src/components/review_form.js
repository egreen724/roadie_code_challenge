import React, { Component } from 'react'


class ReviewForm extends Component {

  state = {
    name: '',
    title: '',
    rating: 1,
    date: new Date().toISOString().slice(0, 10),
    content: ''
  }

  handleChange = (event) => {
   let name = event.target.name;
   let value = event.target.value;

   this.setState({[name]: value});

  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.name === "") {
      return alert("The name field cannot be blank.")
    } else if (this.state.title === "") {
      return alert("The title field cannot be blank.")
    } else if (this.state.content === "") {
      return alert("The review cannot be blank.")
    } else {
      this.props.addReview(this.state)

    }

    this.props.handleClose()

  }


  render() {
    if(!this.props.show) {
      return null
    } else {
    return (
      <div>
        <div className="modal">
        <button id="x-button" onClick={() => this.props.handleClose()}>X</button>

        <h1 id="modal-header">ADD REVIEW</h1>

        <form onSubmit={this.handleSubmit}>

          <label>Rating</label>
          <br></br>
          <select onChange={this.handleChange} name='rating' value={this.state.rating}>
            <option value='1'>One star</option>
            <option value='2'>Two stars</option>
            <option value='3'>Three stars</option>
            <option value='4'>Four stars</option>
            <option value='5'>Five stars</option>
          </select>
          <br></br>
          <label>Your name</label>
          <br></br>
          <input
            type='text'
            name='name'
            onChange={this.handleChange}
            placeholder="Enter text here..."
          />
          <br></br>
          <label>Review Title</label>
          <br></br>
          <input
            type='text'
            name='title'
            placeholder="Enter text here..."
            onChange={this.handleChange}
          />
          <br></br>
          <label>Write your review below</label>
          <br></br>
          <textarea
            type='textarea'
            name='content'
            placeholder="Enter text here..."
            onChange={this.handleChange}
          />

          <br></br>
          <br></br>
          <div id='form-buttons'>
            <button className="white" onClick={() => this.props.handleClose()}>Cancel</button>
            <input type='submit' id="teal-submit" value="Submit"/>
          </div>

        </form>
      </div>
    <div className="modal-overlay"> </div>
  </div>

    )
  }
}

};

export default ReviewForm;
