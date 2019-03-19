import React, { Component } from "react";
import Particles from "react-particles-js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 200
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0px",
          backgroundColor: "#36454f"
        }}
      />
    );
  }
}

export default App;