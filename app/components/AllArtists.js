import React, {Component} from 'react'
import { connect } from 'react-redux'
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom'
import {getAllArtists} from '../redux/action-and-thunk-creators'

class AllArtists extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('hello?')
        this.props.getAllArtists()
    }

    render() {
       
        return (
            <div>
                <h1 className = 'section-title'>All Artists:</h1>
                <ul className = 'container'>
                {this.props.artists.map(artist => (
                    
                    <Link to={`/artists/${artist.id}`}>
                    <div className='artist'key={artist.id}>
                    {artist.firstName + ' ' + artist.lastName}
                    <div className='artist'key={artist.id}>
                    {artist.born}</div></div></Link>
                    
                ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artists: state.artistsReducer.artists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllArtists: () => dispatch(getAllArtists())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllArtists)
