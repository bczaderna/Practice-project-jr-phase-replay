import axios from 'axios'

//action
export const GOT_ONE_PHOTOGRAPH = 'GOT_ONE_PHOTOGRAPH'

//action creator
export const gotOnePhotograph = photograph => {
    return {
      type: GOT_ONE_PHOTOGRAPH,
      singlePhotograph: photograph
    };
  };

//thunk creator
export const getOnePhotograph = photographId => {
    return async dispatch => {
      let response = await axios.get(`/api/photographs/${photographId}`);
      let photograph = response.data;
      dispatch(gotOnePhotograph(photograph));
    };
  };


//reducer
const singlePhotographReducer = (state = {}, action) => {
    switch (action.type) {
      case GOT_ONE_PHOTOGRAPH:
        return action.singlePhotograph;
  
      default: return state;
    }
  };

export default singlePhotographReducer;