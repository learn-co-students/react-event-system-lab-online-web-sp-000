// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends React.Component {

passcode = () => {
  console.log('Entering password...');
}

render() {
  return (
    <input type="password" onKeyUp={this.passcode}/>
  )
}

}

export default Keypad