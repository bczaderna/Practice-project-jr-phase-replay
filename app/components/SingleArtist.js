import React, { Component } from "react";
import { connect } from "react-redux";
import { getOneArtist } from "../redux/action-and-thunk-creators";

class SingleArtist extends Component {
  componentDidMount() {
    this.props.getOneArtist(this.props.match.params.id);
  }

  render() {
    let artist = this.props.singleArtist;
    
    return (
      <div>
        {
          <div>
            <div className='artist'>Name: {artist.firstName + " " + artist.lastName}</div>
            <div className='artist'>Born: {artist.born}</div>
            <div className='artist'>
              Photographs:
              {artist.photographs
                ? artist.photographs.map(photograph => {
                    return (
                      <ul key={photograph.id}>
                        <li className='tab'>{photograph.title}</li>
                      </ul>
                    );
                  })
                : null}
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleArtist: state.artistsReducer.singleArtist
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
