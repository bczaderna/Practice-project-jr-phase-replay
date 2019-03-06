import React, {Component} from 'react'
import { connect } from 'react-redux'
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
            // console.log('returning all photographs')
            <div>
                <h1 className = 'section-title'>All Photographs:</h1>
                <ul className='container'>
                {this.props.photographs.map(photograph => (
                    <div>
                    <div className='photo date' key={photograph.id}>
                    {photograph.date}</div>
                    <div className='photo place' key= {photograph.id}>
                    {photograph.place}</div>
                    <div className='price'>
                    {photograph.price}</div>
                    <img src={photograph.imageUrl}/>
                    <div className='image url'>
                    </div>
                    <div className='image size' key={photograph.id}>
                    {photograph.size}</div>
                    </div>
                    
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

