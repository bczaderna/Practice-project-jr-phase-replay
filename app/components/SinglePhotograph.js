import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getOnePhotograph} from '../redux/action-and-thunk-creators'

class SinglePhotograph extends Component {

    componentDidMount() {
        console.log('single photo mounted')
        this.props.getOnePhotograph(this.props.match.params.id)
    }

    render() {
        console.log(this.props.singlePhotograph.artist, 'what is eager loaded artist info')
        return (
            <div>
                {
                    <ul>
                        <li>{this.props.singlePhotograph.date}</li>
                        <li>{this.props.singlePhotograph.name}</li>
                        {/* <li>{this.props.singlePhotograph.artist.born}</li> */}
                        <li><img src={this.props.singlePhotograph.imageUrl} /></li>
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
