import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import {
  getAllPhotographs,
  removePhotograph
} from "../redux/action-and-thunk-creators";

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
                <div className="photograph">Date:{photograph.date}</div>
                <div className="photograph">Place:{photograph.place}</div>

                {/* <img src={photograph.imageUrl}/> */}
                <div className="photograph">Size:{photograph.size}</div>
              </Link>
              <button className='label'
                onClick={() => {
                  this.deleteItem(photograph.id);
                }}
              >
                remove
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photographs: state.photographsReducer.photographs
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
