import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getOneArtist} from '../redux/action-and-thunk-creators'

class SingleArtist extends Component {

    componentDidMount() {
        
        this.props.getOneArtist(this.props.match.params.id)
    }



    render() {
        let artist = this.props.singleArtist;

        return (
            <div>
                {
                    <ul>
                        <li>{artist.firstName + ' ' + artist.lastName}</li>
                        <li>{artist.born}</li>
                        <li>
                         {artist.photographs ? artist.photographs[0].name : null}
                        </li>
                        
                    </ul>
                }
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        singleArtist: state.artistsReducer.singleArtist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOneArtist: (artistId) => dispatch(getOneArtist(artistId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleArtist)
