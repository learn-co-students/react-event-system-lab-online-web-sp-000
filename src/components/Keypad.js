import React, { Component } from "react";

// Code Keypad Component Here
export default class Keypad extends Component {
  
  logger = () => (console.log('Entering password...'))

  render() {
    return(
      <input onKeyUp={this.logger} type="password" name="password"></input>
    )
  }
}