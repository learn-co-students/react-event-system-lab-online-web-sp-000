// Code Keypad Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

  good = () => {
     console.log('Good!');
   }

   hey = () => {
      console.log('Hey! Eyes on me!');
    }

  render() {
    return (
      <button onFocus={this.good} onBlur={this.hey}>Button</button>
    )
  }
}

export default EyesOnMe;
