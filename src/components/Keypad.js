import React, { Component } from 'react';

export default class Keypad extends Component {

  enterPassword = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input onKeyUp = {this.enterPassword} type="password" />
      </div>
    )
  }

}
