import React, {Component} from 'react'
import { connect } from 'react-redux'
import {BrowserRouter, Router, Switch, Link, Redirect} from 'react-router-dom'
import {getAllPhotographs} from '../redux/action-and-thunk-creators'
import {photographsReducer, rootReducer, artistsReducer} from '../redux/reducers'
//double check on .store path...

class AllPhotographs extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllPhotographs()
        console.log(this.props, 'what is props')
        console.log(this.props.photographs, 'what is photographs on props')
    }

    render() {
       
        return (
            // console.log('returning all photographs')
            <div>
                <h1 className = 'section-title'>All Photographs:</h1>
                <ul className='container'>
                {this.props.photographs.map(photograph => (
                    <div className='photo' key={photograph.id}>
                    {photograph.date}</div>
                ))}
                </ul>  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photographs: state.photographsReducer.photographs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPhotographs: ()=> dispatch(getAllPhotographs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPhotographs)

