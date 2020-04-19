// Code Keypad Component Here
import React, {Component} from 'react'

export default class Keypad extends Component {
  logWhenType = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.logWhenType} type='password'></input>
    )
  }
}