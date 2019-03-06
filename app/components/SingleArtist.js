import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getOneArtist} from '../redux/action-and-thunk-creators'

class SingleArtist extends Component {

    componentDidMount() {
        console.log('single artist mounted')
        console.log(this.props.state, 'what is state')
        this.props.getOneArtist(this.props.match.params.id)
    }

    render() {

        return (
            <div>
                {
                    <ul>
                        <li>hello?</li>
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
