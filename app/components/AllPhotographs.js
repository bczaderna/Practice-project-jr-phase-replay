import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import UpdatePhotographForm from "./UpdatePhotographForm";
import {
  removePhotograph,
  getAllPhotographs
} from "../redux/allPhotographsReducer";

//TRIED LOADING

class AllPhotographs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      photoIdToUpdate: 0,
      loading: true
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleUpdateForm = this.toggleUpdateForm.bind(this);
  }

  async componentDidMount() {
    await this.props.getAllPhotographs();
    this.setState({
      loading: false
    })

    console.log(this.state.loading, 'loading state')
  }

  deleteItem(photographId) {
    this.props.removePhotograph(photographId);
  }

  toggleUpdateForm(photoId) {
    this.setState({
      showForm: !this.state.showForm,
      photoIdToUpdate: photoId
    });
  }

  // toggleUpdateForm(photoId) {
  //   if (this.state.photoIdToUpdate === photoId) {
  //     this.setState({
  //       showForm: !this.state.showForm,
  //       photoIdToUpdate: photoId
  //     })
  //   } else {
  //     this.setState({
  //       photoIdToUpdate: photoId
  //     })
  //   }
  // }

  render() {
  if (this.state.loading) return <div>Loading...</div>
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
                type="button"
                className="label"
                onClick={() => {
                  this.deleteItem(photograph.id);
                }}
              >
                remove
              </button>

              <button
                type="button"
                className="label"
                onClick={(e) => {
                  console.log(e, 'event')
                  this.toggleUpdateForm(photograph.id);
                }}
              >
                update
              </button>
              {this.state.photoIdToUpdate === photograph.id ? (
                <UpdatePhotographForm photoId={this.state.photoIdToUpdate} />
              ) : null}
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
