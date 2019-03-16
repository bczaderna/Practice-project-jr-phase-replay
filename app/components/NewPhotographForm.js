import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addPhotograph} from '../redux/action-and-thunk-creators'

class NewPhotographForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      size: '',
      place: '',
      image: '',
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
        title: '',
        price: '',
        size: '',
        place: '',
        image: '',
    });
  }


  render() {
   
    return (
      <form className='form' onSubmit={this.handleSubmit}>
      <br></br>
      <span className='section-title'>Add a Photograph:</span><br>
      </br>
      <br/>
        <label className='label'>
          Title:
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </label><br/>

        <label className='label'>
          Price
          <input
            type="text"
            name="price"
            onChange={this.handleChange}
            value={this.state.price}
          />
        </label><br/>

        <label className='label'>
          Size:
          <input
            type="text"
            name="size"
            onChange={this.handleChange}
            value={this.state.size}
          />
        </label><br/>

        <label className='label'>
          Place:
          <input
            type="text"
            name="place"
            onChange={this.handleChange}
            value={this.state.place}
          />
        </label><br/>

        <label className='label'>
          Image:
          <input
            type="text"
            name="image"
            onChange={this.handleChange}
            value={this.state.image}
          />
        </label><br/>
        <br/>


        <button type="submit" className='label'>Submit New Photograph</button>
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