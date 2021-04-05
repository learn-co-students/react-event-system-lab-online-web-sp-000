// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

  constructor() {
    super()
  }

  handlePwdKeyUp = () => {
      console.log('Entering password...')
  }

  render() {
    return (
        <div><input onKeyUp={this.handlePwdKeyUp}  type="password"/></div>

    )
  }
}