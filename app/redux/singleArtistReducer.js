import axios from 'axios'

//maybe have another action called updateOneArtist???

//action
export const GOT_ONE_ARTIST = 'GOT_ONE_ARTIST'

export const UPDATED_ONE_ARTIST = 'UPDATE_ONE_ARTIST'

//action creator
export const gotOneArtist = artist => {
    return {
      type: GOT_ONE_ARTIST,
      singleArtist: artist
    };
  };

export const updatedOneArtist = artist => {
  return {
    type: UPDATED_ONE_ARTIST,
    singleArtist: artist
  }
}

//thunk creator
export const getOneArtist = artistId => {
    return async dispatch => {
      let response = await axios.get(`/api/artists/${artistId}`);
      let artist = response.data;
      dispatch(gotOneArtist(artist));
    };
  };

export const updateOneArtist = (localState, artistId) => {
  console.log('**INSIDE UPDATE ONE THUNK')
    return async dispatch => {
      let response = await axios.put(`/api/artists/${artistId}`, localState);
    let updated = response.data;
    dispatch(updatedOneArtist(updated));
    }
}


//reducer
const singleArtistReducer = (state = {}, action) => {
    switch (action.type) {
      case GOT_ONE_ARTIST:
        return action.singleArtist;
     
      case UPDATED_ONE_ARTIST:
        return action.singleArtist

        default: return state;
    }

  };

export default singleArtistReducer;