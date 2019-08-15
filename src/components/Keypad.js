import React from 'react';

export default class Keypad extends React.Component {
  handlePassword = () => {
    console.log("Entering password...");
  }

  render() {
    return (
      <div>
        <label>Password:</label>
        <input type="password" onKeyUp={this.handlePassword}></input>
      </div>
    );
  }
}