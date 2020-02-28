// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

  someText = () => console.log('Entering password...')

  render() {
    return (
        <input onKeyUp={this.someText} type="password" />
    )
  }
}

export default Keypad