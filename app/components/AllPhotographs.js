import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import UpdatePhotographForm  from './UpdatePhotographForm';
import { removePhotograph, getAllPhotographs } from '../redux/allPhotographsReducer'


class AllPhotographs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      photoIdToUpdate: 0
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleUpdateForm = this.toggleUpdateForm.bind(this);
  }

  componentDidMount() {
    this.props.getAllPhotographs();
  }

  deleteItem(photographId) {
    this.props.removePhotograph(photographId);
  }

  toggleUpdateForm(photographId) {
    console.log(this.state, 'what is state before')

   
    this.setState({
      showForm: !this.state.showForm,
      photoIdToUpdate: photographId
    })
    console.log(this.state.showForm, 'has it toggled')
  }

  render() {
    return (
      <div>
        <h1 className="section-title">All Photographs:</h1>
        <ul className="container">
          {this.props.photographs.map(photograph => (
            <div key={photograph.id}>
              <Link to={`/photographs/${photograph.id}`}>
                <div className="photograph">Title:{photograph.title}</div>
                {/* <div className="photograph">Artist:{photograph.artist}</div> */}
                <img src={photograph.imageUrl} />
              </Link>
              
              <button
                type="button" className="label"
                onClick={() => {
                  this.deleteItem(photograph.id);
                }}
              >
                remove
              </button>

             
              

              <button
                type="button"
                className="label"
                onClick={() => {
                  this.toggleUpdateForm(photograph.id)
                }}
              >
                update
              </button>{this.state.showForm ? <UpdatePhotographForm photoId={this.state.photoIdToUpdate}/> : null}
              <br />
              <br />
            </div>
          ))}
        </ul> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photographs: state.allPhotographs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPhotographs: () => dispatch(getAllPhotographs()),
    removePhotograph: photographId => dispatch(removePhotograph(photographId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPhotographs);
