import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paraPosition: false,
    };
  }

  render() {
    return (
      <div id="main">
        {this.state.paraPosition ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : (
          <button
            id="click"
            onClick={() => this.setState({ paraPosition: true })}
          >
            click
          </button>
        )}
      </div>
    );
  }
}

export default App;
