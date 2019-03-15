import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import AllPhotographs from "./AllPhotographs";
import AllArtists from "./AllArtists";
import SinglePhotograph from "./SinglePhotograph";
import SingleArtist from "./SingleArtist";
import Navbar from "./Navbar";
import NewArtistForm from './NewArtistForm';
import NewPhotographForm from './NewPhotographForm';
import NotFound from "./NotFound";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          Welcome!
          <Navbar />
        </nav>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              strict
              render={() => {
                return (
                  <div>
                    <h1>Welcome to the Photography Center!</h1>
                    <br />
                  </div>
                );
              }}
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
