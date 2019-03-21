import {combineReducers} from 'redux'

import { GOT_ALL_ARTISTS, GOT_ALL_PHOTOGRAPHS, GOT_ONE_PHOTOGRAPH, GOT_ONE_ARTIST, ADDED_ARTIST, ADDED_PHOTOGRAPH, REMOVED_PHOTOGRAPH, REMOVED_ARTIST, UPDATED_ARTIST, UPDATED_PHOTOGRAPH} from './actions'

const initialState = {
    photographs: [],
    artists: [],
    singlePhotograph: {},
    singleArtist: {}
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
        case ADDED_PHOTOGRAPH:
        return {
            ...state,
            photographs: [...state.photographs, action.photograph]
        }
        case REMOVED_PHOTOGRAPH:
        return {
            ...state,
            photographs: state.photographs.filter(photograph => photograph.id !== action.photograph)
        }
        case UPDATED_PHOTOGRAPH:
        return {
            ...state,
            photographs: [state.photographs.map(photograph => {
                if (photograph.id !== action.id) {
                    return photograph;
                }
            }), action.photograph]
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
        case ADDED_ARTIST:
        return {
            ...state,
            artists: [...state.artists, action.artist]
        }
        case REMOVED_ARTIST:
        return {
            ...state,
            artists: state.artists.filter(artist => artist.id != action.artist)
        }
        case UPDATED_ARTIST:
        return {
            ...state,
            artists: [state.artists.map(artist => {
                if (artist.id !== action.id) {
                    return artist;
                }
            }), action.artist]
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
