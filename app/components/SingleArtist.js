import React, { Component } from "react";
import { connect } from "react-redux";
import { getOneArtist } from "../redux/singleArtistReducer";
import UpdateArtistForm from "./UpdateArtistForm";
import NotFound from './NotFound'

class SingleArtist extends Component {
  componentDidMount() {
    this.props.getOneArtist(this.props.match.params.id);
  }

  render() {
    let artist = this.props.singleArtist;
    

    return artist ? (
      <div>
        {
          <div>
            <br />
            <div className="artist">
              Name: {artist.firstName + " " + artist.lastName}
            </div>
            <div className="artist">Born: {artist.born}</div>
            <div className="artist">
              Photographs:
              {artist.photographs
                ? artist.photographs.map(photograph => {
                    return (
                      <ul key={photograph.id}>
                        <li className="tab">{photograph.title}</li>
                      </ul>
                    );
                  })
                : null}
            </div>
          </div>
        }
        <UpdateArtistForm artistId={this.props.match.params.id} />
      </div>
    ) : <NotFound />;
  }
}

const mapStateToProps = state => {
  return {
    singleArtist: state.singleArtist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOneArtist: artistId => dispatch(getOneArtist(artistId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleArtist);
