import React, { Component } from 'react';

export class Keypad extends Component {
  render() {
    return (
      <div>
        <input type="password" onKeyUp={() => console.log('Entering password...')} />
      </div>
    );
  }
}

export default Keypad;
