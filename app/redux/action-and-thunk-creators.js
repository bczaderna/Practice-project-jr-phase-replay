import axios from 'axios';
import { GOT_ALL_PHOTOGRAPHS, GOT_ALL_ARTISTS, GOT_ONE_ARTIST, GOT_ONE_PHOTOGRAPH, ADDED_PHOTOGRAPH, ADDED_ARTIST } from './actions'


//ACTION CREATORS
//photographs
export const gotAllPhotographs = (photographsArr) => {
    return {
        type: GOT_ALL_PHOTOGRAPHS,
        photographs: photographsArr
    }
}

export const gotOnePhotograph = (photograph) => {
    return {
        type: GOT_ONE_PHOTOGRAPH,
        singlePhotograph: photograph
    }
}

export const addedPhotograph = photograph => {
    return {
        //not sure about what the name of the state should be here...
        type: ADDED_PHOTOGRAPH,
        photograph: photograph
    }
}


//artists
export const gotAllArtists = (artistsArr) => {
    return {
        type: GOT_ALL_ARTISTS,
        artists: artistsArr
    }
}

export const gotOneArtist = (artist) => {
    return {
        type: GOT_ONE_ARTIST,
        singleArtist: artist
    }
}

export const addedArtist = artist => {
    return {
        type: ADDED_ARTIST,
        artist: artist
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

export const getOnePhotograph = (photographId) => {
    return async dispatch => {
       
        let response = await axios.get(`/api/photographs/${photographId}`);
        let photograph = response.data;
        dispatch(gotOnePhotograph(photograph))
    }
}

export const addPhotograph = (photographInfo) => {
    return async dispatch => {
        const response = await axios.post('/api/photographs/form', photographInfo)
        const newPhotograph = response.data;
        dispatch(addedPhotograph(newPhotograph))
    }
}


//artists
export const getAllArtists = () => {
    return async dispatch => {
        let response = await axios.get('/api/artists');
        let artistsArr = response.data;
        dispatch(gotAllArtists(artistsArr));
    }
}

export const getOneArtist = (artistId) => {
    return async dispatch => {
        let response = await axios.get(`/api/artists/${artistId}`);
        let artist = response.data;
        dispatch(gotOneArtist(artist))
    }
}

export const addArtist = (artistInfo) => {
    return async dispatch => {
        const response = await axios.post('/api/artists/form', artistInfo);
        const newArtist = response.data;
        dispatch(addedArtist(newArtist));
    }
}