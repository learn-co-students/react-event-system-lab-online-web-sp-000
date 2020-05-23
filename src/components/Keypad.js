// Code Keypad Component Here
import React from 'react';


class Keypad extends React.Component {
  handleInputPassword = () => console.log('Entering password...')

  constructor() {
    this.name = 'name';
  }

  render() {
    return (<div><input type="password" onKeyUP={this.handleInputPassword} /></div>)
  }
}

export default Keypad;