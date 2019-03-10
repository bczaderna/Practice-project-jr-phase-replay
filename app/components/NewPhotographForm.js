import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addPhotograph} from '../store'

class NewPhotographForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      born: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addPhotograph(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      born: ''
    });
  }


  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
      <span>Add a Photograph:</span>
        <label>
          Title:
          <input
            type="text"
            name="Title"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>

        <label>
          Price
          <input
            type="text"
            name="Price"
            onChange={this.handleChange}
            value={this.state.address}
          />
        </label>

        <label>
          Size:
          <input
            type="text"
            name="Size"
            onChange={this.handleChange}
            value={this.state.address}
          />
        </label>

        <label>
          Place:
          <input
            type="text"
            name="Place"
            onChange={this.handleChange}
            value={this.state.address}
          />
        </label>

        <label>
          Image:
          <input
            type="text"
            name="Image"
            onChange={this.handleChange}
            value={this.state.address}
          />
        </label>


        <button type="submit">Submit New Photograph</button>
      </form>
      
    );
  }
}

//giving the this part of the state from the store to this.props
const mapStateToProps = (state) => {
    
    return {
      photographs: state.photographsReducer.photographs,
    }
  }
 
  const mapDispatchToProps = (dispatch) => {
    return {
      addPhotograph: (photographInfo) => dispatch(addPhotograph(photographInfo))

    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(NewPhotographForm);