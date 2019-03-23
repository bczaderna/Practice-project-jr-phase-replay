import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { removePhotograph } from '../redux/allPhotographsReducer'
import { getAllPhotographs } from '../redux/allPhotographsReducer'

class AllPhotographs extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.props.getAllPhotographs();
  }

  deleteItem(photographId) {
    this.props.removePhotograph(photographId);
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
                className="label"
                onClick={() => {
                  this.deleteItem(photograph.id);
                }}
              >
                remove
              </button>
              <br />
              <br/>
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
