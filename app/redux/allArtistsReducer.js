import axios from "axios";

//action
export const ADDED_ARTIST = "ADDED_ARTIST";

//action creator
export const addedArtist = artist => {
  return {
    type: ADDED_ARTIST,
    artist: artist
  };
};

//thunk creator
export const addArtist = artistInfo => {
  return async dispatch => {
    const response = await axios.post("/api/artists/form", artistInfo);
    const newArtist = response.data;
    console.log(newArtist, "new artist");
    dispatch(addedArtist(newArtist));
  };
};

//action
export const GOT_ALL_ARTISTS = "GOT_ALL_ARTISTS";

//action creator
export const gotAllArtists = artistsArr => {
  return {
    type: GOT_ALL_ARTISTS,
    artists: artistsArr
  };
};

//thunk creator

export const getAllArtists = () => {
  return async dispatch => {
    let response = await axios.get("/api/artists");
    let artistsArr = response.data;
    dispatch(gotAllArtists(artistsArr));
  };
};

//action
export const REMOVED_ARTIST = "REMOVED_ARTIST";

//action creator
export const removedArtist = artistId => {
  return {
    type: REMOVED_ARTIST,
    artist: artistId
  };
};

//thunk creator
export const removeArtist = artistId => {
  return async dispatch => {
    await axios.delete(`/api/artists/${artistId}`);
    dispatch(removedArtist(artistId));
  };
};

//action
export const UPDATED_ARTIST = "UPDATED_ARTIST";

//action creator
export const updatedArtist = artistId => {
  return {
    type: UPDATED_ARTIST,
    artist: artistId
  };
};

//thunk creator

export const updateArtist = (localState, artistId) => {
  return async dispatch => {
    let response = await axios.put(`/api/artists/${artistId}`, localState);

    let updated = response.data;
    dispatch(updatedArtist(updated));
  };
};

const allArtistsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_ARTISTS:
      return action.artists;
    case ADDED_ARTIST:
      return [...state, action.artist];
    case REMOVED_ARTIST:
      let filtered = state.filter(artist => artist.id !== action.artist);
      return filtered;

    case UPDATED_ARTIST:
      let updatedArr = [];
      for (let i = 0; i < state.length; i++) {
        let currentArtist = state[i];
        if (currentArtist !== state[action.artist]) {
          updatedArr.push(currentArtist);
        } else {
          updatedArr.push(state[action.artist]);
        }
      }
      return updatedArr;

    default:
      return state;
  }
};

export default allArtistsReducer;
