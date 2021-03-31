import React, {Component} from 'react';

export default class Keypad extends Component {
    passwordtHandler = () => {
        console.log('Entering password...')
    }
    render() {
        return (
            <input type="password" onKeyUp={this.passwordtHandler} />
        )
    }
}// Code Keypad Component Here
