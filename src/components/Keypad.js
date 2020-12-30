// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

keyEvent = () => console.log("Entering password...")

  render() {
    return (
      <div>
      <input type="password"  onKeyUp={this.keyEvent}>
      </input>
      </div>
    )
  }
}

export default Keypad;
