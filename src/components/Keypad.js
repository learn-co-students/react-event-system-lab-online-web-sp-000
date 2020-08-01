import React, { Component } from 'react'


class KeyPad extends Component {

  keyHandler = () => {
    console.log("Entering password...");
  }
  render() {
    return (
      <input type="password" onKeyUp={this.keyHandler}/>
    )
  }
}

export default KeyPad

