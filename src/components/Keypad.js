import React from 'react';

class Keypad extends React.Component {

  keyUpResponse = () => {
    console.log("Entering password...");
  }

  render() {
    return (
      <input type="password" onKeyUp={this.keyUpResponse}/>
    );
  }
}

export default Keypad;
