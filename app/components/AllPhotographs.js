import React, {Component} from 'react'
import { connect } from 'react-redux'
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom'
import {getAllPhotographs} from '../redux/action-and-thunk-creators'
//double check on .store path...

class AllPhotographs extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('here')
        this.props.getAllPhotographs()
        
    }

    render() {
        console.log(this.props.photographs, 'photographs obj')
        return (
            
            <div>
                <h1 className = 'section-title'>All Photographs:</h1>
                <ul className='container'>
                {this.props.photographs.map(photograph => (
                    
                    <Link to={`/photographs/${photograph.id}`}>
                    <div className='photograph' key={photograph.id}>
                    {photograph.date}</div>
                    <div className='photograph' key= {photograph.id}>
                    {photograph.place}</div>
                    <div className='photograph'>
                    {photograph.price}</div>
                    <img src={photograph.imageUrl}/>
                    <div className='photograph' key={photograph.id}>
                    {photograph.size}</div>
                    <div className='photograph' key={photograph.id}>
                    {photograph.size}</div></Link>
                    
                    
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
        getAllPhotographs: () => dispatch(getAllPhotographs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPhotographs)

