import React from 'react';

export default class Keypad extends React.Component {

  enterPassword = () => {
   console.log("Entering password...");
 }

  render() {
    return (
      <div>
      <label>Enter Password:</label>
      <input type="password" onKeyUp={this.enterPassword}></input>
      </div>
    )
  }
}
