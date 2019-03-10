import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getOnePhotograph} from '../redux/action-and-thunk-creators'

class SinglePhotograph extends Component {

    componentDidMount() {
        
        this.props.getOnePhotograph(this.props.match.params.id)
    }

    render() {
        let photograph = this.props.singlePhotograph;
        return (
            <div>
                {
                    <ul>
                        <li>{photograph.date}</li>
                        <li>{photograph.name}</li>
                        <li>{photograph.artist ? photograph.artist.id : null}</li>
                        <li><img src={photograph.imageUrl} /></li>
                    </ul>
                }
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        singlePhotograph: state.photographsReducer.singlePhotograph
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOnePhotograph: (photographId) => dispatch(getOnePhotograph(photographId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePhotograph)
