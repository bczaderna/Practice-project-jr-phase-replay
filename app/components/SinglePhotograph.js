import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getOnePhotograph} from '../redux/action-and-thunk-creators'
import UpdatePhotographForm from './UpdatePhotographForm';

class SinglePhotograph extends Component {

    componentDidMount() {
        
        this.props.getOnePhotograph(this.props.match.params.id)
    }

    render() {
        let photograph = this.props.singlePhotograph;
        return (
            <div className='photograph'>
                {
                    <div>
                        <br/>
                        <div>Artist:{photograph.artist ? photograph.artist.firstName + ' ' + photograph.artist.lastName : null}</div>
                        <div>Title:{photograph.title}</div>
                        <div>Date:{photograph.date}</div>
                        <br/>
                        <br/>
                        <div><img src={photograph.imageUrl} /></div>
                    </div>
                }
                <UpdatePhotographForm photoId={this.props.match.params.id}/>
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
