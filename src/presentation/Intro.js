import React, { Component } from "react";

import vech1 from "../../img/vech-1.png";
import vech2 from "../../img/vech-2.png";
import vech3 from "../../img/vech-3.png";
import vech4 from "../../img/vech-4.png";

class Intro extends Component {

  render() {
    return (
        <main>
          <section className="section-intro">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">How to find Falcone.</h2>
            </div>

            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  What you need to do ?
                </h3>
                <p className="paragraph">
                  Check your luck whether you're able to find the Falcone or
                  not. You just need to select any 4 planets out of 6 planets.
                  After each selection of planet, list will appear that shows
                  the vechicle detail. From vechicle list, you have to select 1
                  vechicle for each planet. After filling all fields, find
                  Falcone button gets enable. Click on find Falcone, shows your
                  luck viz. are you able to find Falcone or not.
                </p>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    src={vech1}
                    alt="Photo 1"
                    className="composition__photo composition__photo--p1"
                  />
                  <img
                    src={vech2}
                    alt="Photo 2"
                    className="composition__photo composition__photo--p2"
                  />
                  <img
                    src={vech3}
                    alt="Photo 3"
                    className="composition__photo composition__photo--p3"
                  />
                  <img
                    src={vech4}
                    alt="Photo 4"
                    className="composition__photo composition__photo--p4"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
    );
  }
}

export default Intro;
