import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addArtist} from '../redux/action-and-thunk-creators'

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
    console.log(this.state, 'state')
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
            value={this.state.firstName}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
        </label>

        <label>
          Born:
          <input
            type="text"
            name="born"
            onChange={this.handleChange}
            value={this.state.born}
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