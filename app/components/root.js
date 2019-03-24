import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import AllPhotographs from "./AllPhotographs";
import AllArtists from "./AllArtists";
import SinglePhotograph from "./SinglePhotograph";
import SingleArtist from "./SingleArtist";
import Navbar from "./Navbar";
import NewArtistForm from './NewArtistForm';
import NewPhotographForm from './NewPhotographForm';
import HomePage from './HomePage'
import NotFound from "./NotFound";

const Root = () => {
  //alternative image: https://pbs.twimg.com/media/DS9ii4bXkAE3WgB.jpg

  return (
    <BrowserRouter>
      <div class='container'>
        <nav className='link'>
          <Navbar />
        </nav>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              component={HomePage} 
                // return (
                //   <div id='welcome'>
                //     <h1>Welcome to the Photography Center!</h1>
                //     <br />
                //     <img id='welcome-image' src='https://www.whitehotmagazine.com/UserFiles/image/2010/Henri%20Cartier-Bresson/bresson_yugoslavia300.jpg'></img>
                //   </div>
                // );
          
            />
        

            <Route exact path="/photographs" component={AllPhotographs} />
            <Route exact path="/artists" component={AllArtists} />
            <Route exact path="/artists/:id(\d+)" component={SingleArtist} />
            <Route
              exact
              path="/photographs/:id(\d+)"
              component={SinglePhotograph}
            />
            <Route exact path="/artists/form" component={NewArtistForm}/>
            <Route exact path="/photographs/form" component={NewPhotographForm}/>
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Root;
