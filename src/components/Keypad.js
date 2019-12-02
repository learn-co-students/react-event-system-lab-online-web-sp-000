import React, { Component } from "react";

export default class Keypad extends Component {
  updateText = event => {
    console.log(event.target.value);
  };
  render() {
    return (
      <input
        type="password"
        onKeyUp={() => console.log("Entering password...")}
        placeholder="Enter password"
      ></input>
    );
  }
}
