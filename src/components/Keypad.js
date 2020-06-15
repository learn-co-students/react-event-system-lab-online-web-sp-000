import React, { Component } from 'react';

export default class Keypad extends Component {

  printListeningToPassword = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.printListeningToPassword} type="password" />
    )
  }

}
