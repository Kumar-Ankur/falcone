import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Time extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total_time: 0,
      selectedPlanet: this.props.selectedPlanet,
      selectedVechile: this.props.selectedVechile
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        selectedPlanet: nextProps.selectedPlanet,
        selectedVechile: nextProps.selectedVechile
      },
      () => {
        let PlanetDistance = Object.values(this.state.selectedPlanet);
        let vechileSpeed = Object.values(this.state.selectedVechile);
        let time = 0;

        for (let i = 0; i < PlanetDistance.length; i++) {
          if (PlanetDistance[i].distance !== 0 && vechileSpeed[i].speed !== 0) {
            time += PlanetDistance[i].distance / vechileSpeed[i].speed;
          }
        }
        this.setState({ total_time: time });
      }
    );
  }

  render() {
    return (
      <Fragment>
        <section className="section-time">
          <h3 className="section-time__heading">
            Time Taken: {this.state.total_time}
          </h3>
        </section>

        {this.state.selectedVechile["Destination 1"].name !== "" &&
        this.state.selectedVechile["Destination 2"].name !== "" &&
        this.state.selectedVechile["Destination 3"].name !== "" &&
        this.state.selectedVechile["Destination 4"].name !== "" ? (
          <section className="section-btn">
            <Link
              to={{
                pathname: "/Result",
                state: { total_time: this.state.total_time, selectedPlanet: this.state.selectedPlanet, selectedVechile: this.state.selectedVechile }
              }}
            >
              <a href="#" className="navbtn navbtn--animated navbtn--white">
                Ready to find??
              </a>
            </Link>
          </section>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default Time;
