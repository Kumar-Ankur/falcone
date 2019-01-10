import React, { Component } from "react";

import Planet from "../container/Planet";
import Navbar from "./Navbar";
import Footer from "../container/Footer";

class FindFalcone extends Component {
  render() {
    return (
      <div className="section-falcone">
        <Navbar />
        <Planet />
        <section className="section-btn" />
        <Footer />
      </div>
    );
  }
}

export default FindFalcone;
