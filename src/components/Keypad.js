import React, { Component } from 'react';

export default class Keypad extends Component {

    handleKeyUp = (event) => {
        console.log('Entering password...')
    }

    render() {
      return (
        <div>
            <input onKeyUp={this.handleKeyUp} type="password" />
        </div>
      )
    }
  }