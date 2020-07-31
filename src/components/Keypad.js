// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {
  keyUp = () => {
    console.log('Entering password...')
  }
  render () {
    return <input onKeyUp={this.keyUp} type='password' />
  }
}

export default Keypad
