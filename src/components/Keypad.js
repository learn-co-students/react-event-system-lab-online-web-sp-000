import React from 'react';

export default class Keypad extends React.Component {

  handler = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.handler} type="password" />
    )
  }
}