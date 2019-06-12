// Code Keypad Component Here
import React, { Component } from 'react'

class KeyPadComponent extends Component {
    passwordPrinter = () => {
        console.log('Entering password...')
      }
    render() {
      return (
        <input type="password" onKeyUp={this.passwordPrinter} />
      
      );
    }
  }
  
  export default KeyPadComponent;