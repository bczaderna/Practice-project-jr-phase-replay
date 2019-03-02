import React from 'react'
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom'
import AllPhotographs from './AllPhotographs'
import AllArtists from './AllArtists'


const Root = () => {
    return (
        <BrowserRouter>
        <div>
            <nav>
                Welcome!
                <ul>
                    <Link to='/'>Home Page</Link>
                </ul>
                <ul>
                    <Link to='/photographs'>See All Photographs</Link>
                    <br />
                    <Link to='/artists'>See All Artists</Link>
                </ul>
            </nav>
            <main>
                <Route path='/' exact strict render={
                    () => {
                        return (
                            <div>
                                <h1>Welcome to the Photography Center!</h1>
                                <br />
                            </div>
                        )
                    }
                } />
                <Switch>
                    <Route exact path='/photographs' component= { AllPhotographs} />
                    <Route exact path= '/artists' component= { AllArtists } /> 
                </Switch>
            </main>
        </div>
        </BrowserRouter>
    )
}

export default Root