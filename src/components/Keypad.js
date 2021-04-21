import React, { Component } from 'react';

export default class Keypad extends Component {

  output = () => {
    console.log('Entering password...')
  }

  render() {
    return(
      <input onKeyUp={this.output} type="password" />
    )
  }

}