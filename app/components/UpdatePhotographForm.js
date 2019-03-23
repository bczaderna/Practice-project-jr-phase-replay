import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updatePhotograph } from '../redux/allPhotographsReducer'

class UpdatePhotographForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            date: '',
            imageUrl: '',
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props.photographs, 'local state')
        console.log(this.props.singlePhotograph, 'single photo state from store')
    }

    handleChange(event) {
        
        this.setState({
          [event.target.name]: event.target.value,
        });
    
      }
    
      handleSubmit(event) {
        event.preventDefault();
        
        this.props.updatePhotograph(this.state, this.props.photoId);
        console.log('state is', this.state)
        console.log('id is', this.props.photoId)
        this.setState({
          firstName: '',
          lastName: '',
          title: '',
          date: '',
          imageUrl: ''
        });
      }


    render () {
        return (
        <form onSubmit={this.handleSubmit}>
        <br></br>
        <span className='section-title'>Update This Photograph:</span><br>
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
          Title:
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          required />
        </label><br/>

        <label className='label'>
          Date:
          <input
            type="text"
            name="date"
            onChange={this.handleChange}
            value={this.state.date}
          required />
        </label><br/>

        <label className='label'>
          Image Url:
          <input
            type="text"
            name="imageUrl"
            onChange={this.handleChange}
            value={this.state.imageUrl}
          required />
        </label><br/>

        <button type="submit" className='label'>Submit Update</button>
        </form>
    
    )
}
}

const mapStateToProps = (state) => {
    
    return {
      photographs: state.allPhotographs,
      // singlePhotograph: state.singlePhotograph
    }
  }
 
  const mapDispatchToProps = (dispatch) => {
    return {
     
      updatePhotograph: (localState, photoId) => dispatch(updatePhotograph(localState, photoId)),

      // updateOnePhotograph: (localState, photoId) => {
      //   dispatch(updateOnePhotograph(localState, photoId))
      // }

    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(UpdatePhotographForm);



