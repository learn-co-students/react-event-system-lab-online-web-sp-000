import React, { Component } from 'react';

export default class Keypad extends Component {

 msg = () => {
   console.log('Entering password...')
}

    render() {
      return (
        <input
          placeholder='Hit a key...'
          type="password"
          onKeyUp = {this.msg}
        />
      )
    }

}
