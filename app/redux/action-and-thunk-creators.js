import axios from "axios";
import {
  GOT_ALL_PHOTOGRAPHS,
  GOT_ALL_ARTISTS,
  GOT_ONE_ARTIST,
  GOT_ONE_PHOTOGRAPH,
  ADDED_PHOTOGRAPH,
  ADDED_ARTIST,
  REMOVED_PHOTOGRAPH,
  REMOVED_ARTIST,
  UPDATED_PHOTOGRAPH,
  UPDATED_ARTIST
} from "./actions";

//ACTION CREATORS
//photographs
export const gotAllPhotographs = photographsArr => {
  return {
    type: GOT_ALL_PHOTOGRAPHS,
    photographs: photographsArr
  };
};

export const gotOnePhotograph = photograph => {
  return {
    type: GOT_ONE_PHOTOGRAPH,
    singlePhotograph: photograph
  };
};

export const addedPhotograph = photograph => {
  return {
    //not sure about what the name of the state should be here...
    type: ADDED_PHOTOGRAPH,
    photograph: photograph
  };
};

export const removedPhotograph = photographId => {
  return {
    type: REMOVED_PHOTOGRAPH,
    photograph: photographId
  };
};

export const updatedPhotograph = updated => {
  return {
    type: UPDATED_PHOTOGRAPH,
    photograph: updated
  };
};

//artists
export const gotAllArtists = artistsArr => {
  return {
    type: GOT_ALL_ARTISTS,
    artists: artistsArr
  };
};

export const gotOneArtist = artist => {
  return {
    type: GOT_ONE_ARTIST,
    singleArtist: artist
  };
};

export const addedArtist = artist => {
  return {
    type: ADDED_ARTIST,
    artist: artist
  };
};

export const removedArtist = artistId => {
  return {
    type: REMOVED_ARTIST,
    artist: artistId
  };
};

export const updatedArtist = artistId => {
  return {
    type: UPDATED_ARTIST,
    artist: artistId
  };
};

//THUNK CREATORS
//photographs
export const getAllPhotographs = () => {
  return async dispatch => {
    let response = await axios.get("/api/photographs");
    let photographsArr = response.data;
    dispatch(gotAllPhotographs(photographsArr));
  };
};

export const getOnePhotograph = photographId => {
  return async dispatch => {
    let response = await axios.get(`/api/photographs/${photographId}`);
    let photograph = response.data;
    dispatch(gotOnePhotograph(photograph));
  };
};

export const addPhotograph = photographInfo => {
  return async dispatch => {
    const response = await axios.post("/api/photographs/form", photographInfo);
    const newPhotograph = response.data;
    dispatch(addedPhotograph(newPhotograph));
  };
};

export const removePhotograph = photographId => {
  return async dispatch => {
    await axios.delete(`/api/photographs/${photographId}`);
    dispatch(removedPhotograph(photographId));
  };
};

export const updatePhotograph = (localState, photoId) => {
  return async dispatch => {
    let response = await axios.put(`/api/photographs/${photoId}`, localState);
    let updated = response.data;
    dispatch(updatedPhotograph(updated));
  };
};

//artists
export const getAllArtists = () => {
  return async dispatch => {
    let response = await axios.get("/api/artists");
    let artistsArr = response.data;
    dispatch(gotAllArtists(artistsArr));
  };
};

export const getOneArtist = artistId => {
  return async dispatch => {
    let response = await axios.get(`/api/artists/${artistId}`);
    let artist = response.data;
    dispatch(gotOneArtist(artist));
  };
};

export const addArtist = artistInfo => {
  return async dispatch => {
    console.log(artistInfo, "artist info");
    const response = await axios.post("/api/artists/form", artistInfo);
    const newArtist = response.data;
    console.log(newArtist, "new artist");
    dispatch(addedArtist(newArtist));
  };
};

export const removeArtist = artistId => {
  return async dispatch => {
    await axios.delete(`/api/artists/${artistId}`);
    dispatch(removedArtist(artistId));
  };
};

export const updateArtist = (localState, artistId) => {
  return async dispatch => {
    let response = await axios.put(`/api/artists/${artistId}`, localState);

    let updated = response.data;
    dispatch(updatedArtist(updated));
  };
};
