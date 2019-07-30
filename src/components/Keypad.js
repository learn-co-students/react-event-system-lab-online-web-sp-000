import React, { Component } from 'react';

export default class Keypad extends Component {

  upKeyPress = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.upKeyPress} type="password" />
    )
  }
}
