import React, { Component } from 'react'

export default class Keypad extends Component {


  keyboardListener = (event) => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.keyboardListener} type="password" />
    )
  }

}
