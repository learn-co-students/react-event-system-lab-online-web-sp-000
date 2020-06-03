import React, { Component } from 'react';

class Keypad extends Component {
  
  text = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input onKeyUp={this.text} type="password" />
      );
  }
}

export default Keypad;
