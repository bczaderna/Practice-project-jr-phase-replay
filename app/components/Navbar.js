import { Link } from 'react-router-dom'
import React from 'react'


const Navbar = () => {
  return (
    <nav id="navbar">
      <ul>
        <Link to="/">Home Page</Link>
      </ul>
      <ul>
        <Link to="/photographs">See All Photographs</Link>
        <br />
        <Link to="/artists">See All Artists</Link>
          <Link to='/photographs/form'>Add A Photograph</Link>
          <br />
          <Link to='/artists/form'>Add An Artist</Link>
      </ul>
    </nav>
  );
};

export default Navbar;