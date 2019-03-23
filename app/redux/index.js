import {combineReducers} from 'redux'

import allArtistsReducer from './allArtistsReducer'
import singleArtistReducer from './singleArtistReducer'
import allPhotographsReducer from './allPhotographsReducer'
import singlePhotographReducer from './singlePhotographReducer'

const rootReducer = combineReducers({
    //left side is the piece of state each reducer takes care of, right side is name of reducer
    allArtists: allArtistsReducer,
    singleArtist: singleArtistReducer,
    allPhotographs: allPhotographsReducer,
    singlePhotograph: singlePhotographReducer
})

export default rootReducer
