import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import {
  getAllArtists,
  removeArtist
} from "../redux/action-and-thunk-creators";

class AllArtists extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.props.getAllArtists();
  }

  deleteItem(artistId) {
    this.props.removeArtist(artistId);
  }

  render() {
    return (
      <div>
        <h1 className="section-title">All Artists:</h1>
        <ul className="container">
          {this.props.artists.map(artist => (
            <div key={artist.id}>
              <Link to={`/artists/${artist.id}`}>
                <div className="artist" key={artist.id}>
                  {artist.firstName + " " + artist.lastName}
                  <div className="artist" key={artist.id}>b.
                    {artist.born}
                  </div>
                </div>
              </Link>
              <button
                onClick={() => {
                  this.deleteItem(artist.id);
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
    artists: state.artistsReducer.artists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllArtists: () => dispatch(getAllArtists()),
    removeArtist: artistId => dispatch(removeArtist(artistId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllArtists);
