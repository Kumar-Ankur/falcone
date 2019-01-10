import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../presentation/Navbar";
import Logo from "../../img/Logo.png";

class Result extends Component {
  constructor() {
    super();

    this.state = {
      result: []
    };
  }
  componentDidMount() {
    let selectedPlanetArray = Object.values(this.props.location.state.selectedPlanet).map(planet => {
        return planet.name
    })

    let selectedVechileArray = Object.values(this.props.location.state.selectedVechile).map(planet => {
        return planet.name
    })
    
    console.log("==========call planet API to fetch the data =============");
    fetch("https://findfalcone.herokuapp.com/token", {
      method: "post",
      headers: {
        Accept: "application/json"
      }
    })
      .then(list => list.json())
      .then(result => {
        fetch("https://findfalcone.herokuapp.com/find", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: result.token,
            planet_names: selectedPlanetArray,
            vehicle_names: selectedVechileArray
          })
        })
          .then(res => res.json())
          .then(res => this.setState({ result: res }));
      })
      .catch(err => {
        throw new TypeError(err);
      });
  }

  displayResult = (time) => {
    if (this.state.result.status === "success") {
      return (
        <div className="section-success">
          <h1 className="section-success__heading">
            Success! Congratulation on Finding Falcon. King Shah is mighty
            pleased.
          </h1>
          <h1 className="section-success__sub1">Time taken: {time}</h1>
          <h1 className="section-success__sub1">
            Planet found: {this.state.result.planet_name}
          </h1>
        </div>
      );
    } else if (this.state.result.status === "false") {
      return (
        <div className="section-success">
          <h1 className="section-success__heading">
            Bad Luck!!!, King Shan is unhappy with this news. Try Again to find
            Falcon!!
          </h1>
        </div>
      );
    } else {
      return <div />;
    }
  };

  render() {
    return (
      <div className="section-result">
        <Navbar />
        <div className="section-result__logo-box">
          <img src={Logo} alt="logo" className="section-result__logo" />
        </div>
        {this.displayResult(this.props.location.state.total_time)}
        <section className="section-btn">
          <Link to="/findFalcone">
            <a href="#" className="navbtn navbtn--animated navbtn--white">
              Start Again
            </a>
          </Link>
        </section>
      </div>
    );
  }
}

export default Result;
