import React, {Component} from 'react'
// import { connect } from 'react-redux'
import {BrowserRouter, Router, Switch, Link, Redirect} from 'react-router-dom'
import {getAllPhotographs} from '../redux/store'
//double check on .store path...

class AllArtists extends Component {

    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     console.log('hello?')
    //     this.props.getAllArtists()
    // }

    render() {
       
        return (
            <div>
                <h1>All Artists:</h1>
                <h2>hello????</h2>
            </div>
        )
    }
}

export default AllArtists;
// export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
