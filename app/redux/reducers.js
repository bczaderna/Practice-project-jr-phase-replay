import {combineReducers} from 'redux'
import { gotAllPhotographs, gotAllArtists } from './action-and-thunk-creators'
import { GOT_ALL_ARTISTS, GOT_ALL_PHOTOGRAPHS, GOT_ONE_PHOTOGRAPH, GOT_ONE_ARTIST} from './actions'

const initialState = {
    photographs: [],
    artists: [],
    singlePhotograph: [],
    singleArtist: []
}

//photographs
const photographsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_ALL_PHOTOGRAPHS:
        return { 
            ...state,
            photographs: action.photographs
        }
        case GOT_ONE_PHOTOGRAPH:
        return {
            ...state,
            singlePhotograph: action.singlePhotograph
        }
        default:
        return state
    }
}


//artists
const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_ALL_ARTISTS:
        return {
            ...state,
            artists: action.artists
        }
        case GOT_ONE_ARTIST:
        return {
            ...state,
            singleArtist: action.singleArtist
        }
        default: return state
    }
}


//combine reducers
const rootReducer = combineReducers({
    photographsReducer,
    artistsReducer
})

export default rootReducer
