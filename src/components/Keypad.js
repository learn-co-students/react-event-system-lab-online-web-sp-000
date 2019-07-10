import React from 'react';

class Keypad extends React.Component {
  handleInputsPassword = () => console.log('Entering password...');

  render() {
    return (
      <div>
        <input type='password' onKeyUp={this.handleInputsPassword} />
      </div>
    );
  }
}

export default Keypad;
