import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addArtist} from '../redux/allArtistsReducer'

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
    console.log(this.state, 'what is local state in new artist form')
    this.props.addArtist(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      born: ''
    });
  }


  render() {
    console.log(this.props, 'what is props in form')
    return (
      <form className='form' onSubmit={this.handleSubmit}>
      <br></br>
      <span className='section-title'>Add an Artist:</span><br>
      </br>
      <br/>
        <label className='label'>
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          required />
        </label><br/>

        <label className='label'>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          required />
        </label><br/>

        <label className='label'>
          Born:
          <input
            type="text"
            name="born"
            onChange={this.handleChange}
            value={this.state.born}
          required />
        </label><br/>
        <br/>


        <button type="submit" className='label'>Submit New Artist</button>
      </form>
      
    );
  }
}

//giving the this part of the state from the store to this.props
const mapStateToProps = (state) => {
   
    return {
      artists: state.allArtists,
    }
  }
 
  const mapDispatchToProps = (dispatch) => {
    return {
      addArtist: (artistInfo) => dispatch(addArtist(artistInfo))

    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(NewArtistForm);