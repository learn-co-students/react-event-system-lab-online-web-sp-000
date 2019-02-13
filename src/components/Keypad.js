import React, { Component } from 'react';

class Keypad extends Component {

  onKeyupChange = ()=> {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
        <form>
          <input onKeyUp={this.onKeyupChange}type="password">
          </input>
        </form>
      </div>
    );
  }

}

export default Keypad;// Code Keypad Component Here
