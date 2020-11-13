// Code Keypad Component Here
// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
  
  // constructor() {
  //   super()
  //   this.state = {
  //     c\
  //   }
  // }
  handleSubmit = () => {

  }

  keyUp = (event) => {
    console.log("Entering password...")
  }
  
  render() {
    return (
      <form >
        <label>
          Password:
          <input onKeyUp={this.keyUp} type="password" />
        </label>
      </form>
    )
  }
  
}