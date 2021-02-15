import React from 'react';

class Keypad extends React.Component {

    handleKeyUp() {
       return console.log('Entering password...')
    }


  render() {
    return (
        <input type="password" onKeyUp={this.handleKeyUp}></input>
    )
  }
}

export default Keypad; 