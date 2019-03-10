import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addArtist} from '../store'

class NewArtistForm extends Component {
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
    this.props.addArtist(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      born: ''
    });
  }


  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
      <span>Add an Artist:</span>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.address}
          />
        </label>

        <label>
          Born:
          <input
            type="text"
            name="birth year"
            onChange={this.handleChange}
            value={this.state.address}
          />
        </label>


        <button type="submit">Submit New Artist</button>
      </form>
      
    );
  }
}

//giving the this part of the state from the store to this.props
const mapStateToProps = (state) => {
    
    return {
      artists: state.artistsReducer.artists,
    }
  }
 
  const mapDispatchToProps = (dispatch) => {
    return {
      addArtist: (artistInfo) => dispatch(addArtist(artistInfo))

    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(NewArtistForm);