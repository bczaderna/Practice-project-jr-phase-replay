import React, { Component } from "react";

import root from "./root";

class HomePage extends Component {

  constructor() {
      super()

      this.state = {
          loading: true
      }
  }  

  componentDidMount() {
    this.setState({
        loading: false
    })
  }

  render() {
  if (this.state.laoding) return <div>Loading...</div>
    return (
      <div id="welcome">
        <h1>Welcome to the Photography Center!</h1>
        <br />
        <img
          id="welcome-image"
          src="https://www.whitehotmagazine.com/UserFiles/image/2010/Henri%20Cartier-Bresson/bresson_yugoslavia300.jpg"
        />
      </div>
    );
  }
}

export default HomePage;