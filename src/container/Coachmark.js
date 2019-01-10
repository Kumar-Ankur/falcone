import React, { Component } from "react";
import { Steps, Hints } from "intro.js-react";
import "intro.js/introjs.css";

class Coachmark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepsEnabled: true,
      initialStep: 0,
      steps: [
        {
          element: ".test",
          intro: "This is the title of the game."
        },
        {
          element: ".header",
          intro: "This is the heading section."
        },
        {
          element: ".header__logo-box",
          intro: "King Shan Game Logo"
        },
        {
          element: ".btn .btn--animated .btn--white",
          intro: "Button to start the game."
        },
        {
          element: ".paragraph",
          intro: "Description to show how to play the game"
        },
        {
          element: ".composition__photo--p1",
          intro: "Vechile send by King Shan to find Queen Falcone."
        }
      ],
      hintsEnabled: false,
      hints: [
        {
          element: ".paragraph",
          hint: "Description to show how to play the game",
          hintPosition: "middle-right"
        }
      ]
    };
  }

  onExit = () => {
    this.setState(() => ({ stepsEnabled: false }));
  };

  render() {
    const {
      stepsEnabled,
      steps,
      initialStep,
      hintsEnabled,
      hints
    } = this.state;
    return (
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={initialStep}
        onExit={this.onExit}
      />
    );
  }
}

export default Coachmark;
