import React, { Component } from 'react'

export class Keypad extends Component {
  render() {
    return (
      <input type="password" onKeyUp={() => console.log("Entering password...")}/>
    )
  }
}

export default Keypad
