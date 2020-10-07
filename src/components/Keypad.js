// Code Keypad Component Here
import React, {Component} from 'react';

export default class Keypad extends Component {
  constructor(props) {
    super()
  }

  onKeyUp(event){
    console.log("Entering password...");
  }

  render() {
    return (
      <input onKeyUp={this.onKeyUp} type="password"/>
    )
  }
}