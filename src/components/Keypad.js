// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

    simulate = () => {
        console.log('Entering password...');
    }

    render() {
        return(
            <input type="password" keyUp={this.simulate}>Enter password</input>
        )
    }
}
