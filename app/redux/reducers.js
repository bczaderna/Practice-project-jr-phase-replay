import {combineReducers} from 'redux'
import { gotAllPhotographs, gotAllArtists } from './action-and-thunk-creators'
import { GOT_ALL_ARTISTS, GOT_ALL_PHOTOGRAPHS} from './actions'

const initialState = {
    photographs: [],
    artists: []
}

//photographs
const photographsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_ALL_PHOTOGRAPHS:
        return { 
            ...state,
            photographs: action.photographs
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
        default: return state
    }
}


//combine reducers
const rootReducer = combineReducers({
    photographsReducer,
    artistsReducer
})

export default rootReducer
