import axios from 'axios';
import { GOT_ALL_PHOTOGRAPHS, GOT_ALL_ARTISTS } from './actions'


//ACTION CREATORS
//photographs
export const gotAllPhotographs = (photographsArr) => {
    return {
        type: GOT_ALL_PHOTOGRAPHS,
        photographs: photographsArr
    }
}


//artists
export const gotAllArtists = (artistsArr) => {
    return {
        type: GOT_ALL_ARTISTS,
        artists: artistsArr
    }
}


//THUNK CREATORS
//photographs
export const getAllPhotographs = () => {
    return async dispatch => {
        let response = await axios.get('/api/photographs');
        let photographsArr = response.data;
        dispatch(gotAllPhotographs(photographsArr))
    }
}


//artists
export const getAllArtists = () => {
    return async dispatch => {
        let response = await axios.get('/api/artists');
        let artistsArr = response.data;
        console.log(artistsArr, 'artists array from db')
        dispatch(gotAllArtists(artistsArr));
    }
}