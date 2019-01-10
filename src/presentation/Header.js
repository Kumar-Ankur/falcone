import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/Logo.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-box">
          <img src={Logo} alt="logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="text-primary">
            <span className="text-primary--main">Falcone</span>
            <span className="text-primary--sub">Ready to find Falcone?</span>
          </h1>
          <Link to="/findFalcone">
            <a href="#" className="btn btn--animated btn--white">
              Help King Shan to find Falcone
            </a>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
