import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateArtist } from '../redux/allArtistsReducer'
import { updateOneArtist } from '../redux/singleArtistReducer'


class UpdateArtistForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            born: '',
            photographs: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.singleArtist, 'what is single artist')
  }

  handleChange(event) {
    console.log(this.state, 'state')
    this.setState({
      [event.target.name]: event.target.value,
    });

  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.updateArtist(this.state, this.props.artistId);

    this.props.updateOneArtist(this.state, this.props.artistId)

  
    this.setState({
      firstName: '',
      lastName: '',
      born: '',
    });
  }

    render () {
        return (
        <form onSubmit={this.handleSubmit}>
        <br></br>
        <span className='section-title'>Update This Artist:</span><br>
        </br>

        <br/>
        <label className='label'>
          Artist First Name:
          <input
            type="text"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          required />
        </label><br/>

        <label className='label'>
          Artist Last Name:
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
{/* 
        <label className='label'>
          Photographs:
          <input
            type="text"
            name=""
            onChange={this.handleChange}
            value={this.state.firstName}
          required />
        </label><br/> */}


        <button type="submit" className='label'>Submit Update</button>
        </form>
    
        )
}
}

const mapStateToProps = (state) => {
    
    return {
      artists: state.allArtists,
      singleArtist: state.singleArtist
    }
  }
 
  const mapDispatchToProps = (dispatch) => {
    return {

      updateArtist: (localState, artistId) => dispatch(updateArtist(localState, artistId)),

      updateOneArtist: (localState, artistId) => dispatch(updateOneArtist(localState, artistId))

    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(UpdateArtistForm);
