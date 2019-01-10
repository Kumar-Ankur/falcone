import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Time from "./Time";

class Vechile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remaining_vechile: this.props.remaining_vechile,
      resetFlag : this.props.resetFlag,
      isButtonVisible : false,
      PlanetDetails: this.props.PlanetDetails,
      selectedVechile: {
        "Destination 1": {
          name: "",
          total_no: 0,
          max_distance: 0,
          speed: 0
        },
        "Destination 2": {
          name: "",
          total_no: 0,
          max_distance: 0,
          speed: 0
        },
        "Destination 3": {
          name: "",
          total_no: 0,
          max_distance: 0,
          speed: 0
        },
        "Destination 4": {
          name: "",
          total_no: 0,
          max_distance: 0,
          speed: 0
        }
      },
      isVisible: this.props.isVisible
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isVisible: nextProps.isVisible,
      PlanetDetails: nextProps.PlanetDetails,
      remaining_vechile: nextProps.remaining_vechile,
      resetFlag: nextProps.resetFlag
    },() => {
      if(this.state.resetFlag) {
        this.setState({
          selectedVechile: {
            "Destination 1": {
              name: "",
              total_no: 0,
              max_distance: 0,
              speed: 0
            },
            "Destination 2": {
              name: "",
              total_no: 0,
              max_distance: 0,
              speed: 0
            },
            "Destination 3": {
              name: "",
              total_no: 0,
              max_distance: 0,
              speed: 0
            },
            "Destination 4": {
              name: "",
              total_no: 0,
              max_distance: 0,
              speed: 0
            }
          }
        })
      }
    })
  }

  filteredData = (value, remainingVechileDetails) => {
    let selectedVechile = remainingVechileDetails.filter(checkedVechile => {
      if (checkedVechile.name === value) {
        return checkedVechile;
      }
    });
    return selectedVechile;
  };

  setVechileDetails = (event, Destination) => {
    let filteredVechileDetail = this.filteredData(
      event.target.value,
      this.state.remaining_vechile
    );
    let previousData = "";

    previousData = this.state.selectedVechile[Destination].name;
    let selectedVechileDetails = { ...this.state.selectedVechile }
    selectedVechileDetails[Destination] = {
      name: filteredVechileDetail[0].name,
      total_no: filteredVechileDetail[0].total_no,
      max_distance: filteredVechileDetail[0].max_distance,
      speed: filteredVechileDetail[0].speed
    }
    this.setState({ selectedVechile: selectedVechileDetails }, () => {
      this.remainingVechile(
        this.state.remaining_vechile,
        this.state.selectedVechile,
        Destination,
        previousData
      );
    }
    );
  }

  vechileSelected = (event, Destination) => {

    switch (Destination) {
      case "Destination 1":
        this.setVechileDetails(event, Destination)
        break;

      case "Destination 2":
        this.setVechileDetails(event, Destination)
        break;

      case "Destination 3":
        this.setVechileDetails(event, Destination)
        break;

      case "Destination 4":
        this.setVechileDetails(event, Destination)
        break;

      default:
        this.setState({
          selectedVechile: {
            ...this.state.selectedVechile
          }
        });
        break;
    }
  };

  remainingVechile = (
    remainingVechileList,
    selectedVechileList,
    Destination,
    previousData
  ) => {
    if (previousData === "") {
      remainingVechileList.filter(vechile => {
        if (vechile.name === selectedVechileList[Destination].name) {
          vechile.total_no -= 1;
        }
      });
    } else {
      remainingVechileList.filter(vechile => {
        if (vechile.name === selectedVechileList[Destination].name) {
          vechile.total_no -= 1;
        }
        if (vechile.name === previousData) {
          vechile.total_no += 1;
        }
      });
    }

    this.setState({ remaining_vechile: remainingVechileList });

    if(this.state.selectedVechile["Destination 1"].name !== "" && this.state.selectedVechile["Destination 2"].name !== ""
    && this.state.selectedVechile["Destination 3"].name !== "" && this.state.selectedVechile["Destination 4"].name !== "") {
      this.setState({ isButtonVisible: true })
    } else {
      this.setState({ isButtonVisible: false})
    }
    
  };

  renderVechile = Destination =>
    this.state.remaining_vechile.map(vech => {
      if (
        this.state.PlanetDetails[Destination].distance > vech.max_distance ||
        vech.total_no === 0
      ) {
        return (
          <div className="radio section-radio" key={vech.name}>
            <label>
              <input
                type="radio"
                name="optradio"
                value={vech.name}
                onChange={event => this.vechileSelected(event, Destination)}
                disabled
              />
              <span className="section-radio__disabled">{`${vech.name} (${vech.total_no})`}</span>
            </label>
          </div>
        );
      } else {
        return (
          <div className="radio section-radio" key={vech.name}>
            <label>
              <input
                type="radio"
                name="optradio"
                value={vech.name}
                onChange={event => this.vechileSelected(event, Destination)}
              />
              <span className="section-radio__enabled">{`${vech.name} (${vech.total_no})`}</span>
            </label>
          </div>
        );
      }
    });

  render() {
    return (
      <div className="section-vechile">
        <Time selectedPlanet={this.state.PlanetDetails} selectedVechile={this.state.selectedVechile} />
        <form>
          {this.state.isVisible.vechile1 ? (
            <div className="col-1-of-4 vechile vechile__1">
              {" "}
              {this.renderVechile("Destination 1")}{" "}
            </div>
          ) : (
              ""
            )}
        </form>
        <form>
          {this.state.isVisible.vechile2 ? (
            <div className="col-1-of-4 vechile vechile__2">
              {" "}
              {this.renderVechile("Destination 2")}{" "}
            </div>
          ) : (
              ""
            )}
        </form>
        <form>
          {this.state.isVisible.vechile3 ? (
            <div className="col-1-of-4 vechile vechile__3">
              {" "}
              {this.renderVechile("Destination 3")}{" "}
            </div>
          ) : (
              ""
            )}
        </form>
        <form>
          {this.state.isVisible.vechile4 ? (
            <div className="col-1-of-4 vechile vechile__4">
              {" "}
              {this.renderVechile("Destination 4")}{" "}
            </div>
          ) : (
              ""
            )}
        </form>
      </div>
    );
  }
}

export default Vechile;
