import React, { Component } from "react";

export default class Keypad extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        type="password"
        onKeyUp={() => console.log("Entering password...")}
      />
    );
  }
}
