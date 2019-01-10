import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__text">
          <Link to="/">
            <a href="#" className="navbar__text--separator navbtn navbtn--animated navbtn--white">
              GeekTrust Home
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
