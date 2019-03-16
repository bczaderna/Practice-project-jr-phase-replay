import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul>
        <Link to="/" className="link">Home</Link>
      </ul>
      <ul>
        <Link to="/photographs" className="link">See All Photographs</Link>
        <br />
        <Link to="/artists" className= "link">See All Artists</Link>
      </ul>
      <ul>
        <Link to="/photographs/form" className="link">Add A Photograph</Link>
        <br />
        <Link to="/artists/form" className="link">Add An Artist</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
