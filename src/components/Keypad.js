// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  input = () => {
     console.log('Entering password...');
   }

  render() {
    return (
      <input type="password" onKeyUp={this.input}>Enter password!</input>
    )
  }
}

export default Keypad;
