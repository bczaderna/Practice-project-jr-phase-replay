import axios from "axios";

//action
export const ADDED_PHOTOGRAPH = "ADDED_PHOTOGRAPH";

//action creator
export const addedPhotograph = photograph => {
  return {
    type: ADDED_PHOTOGRAPH,
    photograph: photograph
  };
};

//thunk creator
export const addPhotograph = photographInfo => {
  return async dispatch => {
    const response = await axios.post("/api/photographs/form", photographInfo);
    const newPhotograph = response.data;
    dispatch(addedPhotograph(newPhotograph));
  };
};

//action
export const GOT_ALL_PHOTOGRAPHS = "GOT_ALL_PHOTOGRAPHS";

//action creator
export const gotAllPhotographs = photographsArr => {
  return {
    type: GOT_ALL_PHOTOGRAPHS,
    photographs: photographsArr
  };
};

//thunk creator
export const getAllPhotographs = () => {
  return async dispatch => {
    let response = await axios.get("/api/photographs");
    let photographsArr = response.data;
    dispatch(gotAllPhotographs(photographsArr));
  };
};

//action
export const REMOVED_PHOTOGRAPH = "REMOVED_PHOTOGRAPH";

//action creator
export const removedPhotograph = photographId => {
  return {
    type: REMOVED_PHOTOGRAPH,
    photograph: photographId
  };
};

//thunk creator
export const removePhotograph = photographId => {
  return async dispatch => {
    await axios.delete(`/api/photographs/${photographId}`);
    dispatch(removedPhotograph(photographId));
  };
};

//action
export const UPDATED_PHOTOGRAPH = "UPDATED_PHOTOGRAPH";

//action creator
export const updatedPhotograph = updated => {
  return {
    type: UPDATED_PHOTOGRAPH,
    photograph: updated
  };
};

//thunk creator
export const updatePhotograph = (localState, photoId) => {
  return async dispatch => {
    let response = await axios.put(`/api/photographs/${photoId}`, localState);
    let updated = response.data;
    dispatch(updatedPhotograph(updated));
  };
};

const allPhotographsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_PHOTOGRAPHS:
      return action.photographs;
    case ADDED_PHOTOGRAPH:
      return [...state, action.photograph];
    case REMOVED_PHOTOGRAPH:
      let filtered = state.filter(
        photograph => photograph.id !== action.photograph
      );
      return filtered;

    case UPDATED_PHOTOGRAPH:
  
      let updatedArr = [];
      for (let i = 0; i < state.length; i++) {
        let currentPhoto = state[i];
        if (currentPhoto.id !== action.photograph.id) {
          console.log(currentPhoto, 'current photo')
          console.log(action.photograph, 'updated photograph')
          updatedArr.push(currentPhoto);
        } else {
          updatedArr.push(action.photograph);
        }
      }
      return updatedArr;

    default:
      return state;
  }
};

export default allPhotographsReducer;
