import React, { Component } from "react";

class DistanceFromLengaburu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      distanceCovered: this.props.distanceCovered
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      distanceCovered: nextProps.distanceCovered
    });
  }

  render() {
    return (
      <section className="section-distance">
        {this.state.distanceCovered["Destination 1"].distance !== 0 ? (
          <h2 className="section-distance__1">
            Distance from Lenbaguru:{" "}
            {this.state.distanceCovered["Destination 1"].distance}
          </h2>
        ) : (
          ""
        )}

        {this.state.distanceCovered["Destination 2"].distance !== 0 ? (
          <h2 className="section-distance__2">
            Distance from Lenbaguru:{" "}
            {this.state.distanceCovered["Destination 2"].distance}
          </h2>
        ) : (
          ""
        )}

        {this.state.distanceCovered["Destination 3"].distance !== 0 ? (
          <h2 className="section-distance__3">
            Distance from Lenbaguru:{" "}
            {this.state.distanceCovered["Destination 3"].distance}
          </h2>
        ) : (
          ""
        )}

        {this.state.distanceCovered["Destination 4"].distance !== 0 ? (
          <h2 className="section-distance__4">
            Distance from Lenbaguru:{" "}
            {this.state.distanceCovered["Destination 4"].distance}
          </h2>
        ) : (
          ""
        )}
      </section>
    );
  }
}

export default DistanceFromLengaburu;
